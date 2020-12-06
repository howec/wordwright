import random
import string
import pickle
import re
import numpy as np
import torch.nn as nn
import torch
import torch.nn.functional as F


def random_id_string(stringLength=6):
    """Generate a random string of letters and digits """
    available_characters = string.ascii_lowercase + string.digits
    return ''.join(random.choice(available_characters) for i in range(stringLength))


def random_number_string(stringLength=6):
    """Generate a random string of letters and digits """
    available_characters = string.digits
    return ''.join(random.choice(available_characters) for i in range(stringLength))


# function to generate text
def sample(net, size, prime='it is'):
    # push to GPU
    net.cuda()
    net.eval()
    # batch size is 1
    h = net.init_hidden(1)
    toks = prime.split()
    # predict next token
    for t in prime.split():
      token, h = predict(net, t, h)
    toks.append(token)
    # predict subsequent tokens
    for i in range(size-1):
        token, h = predict(net, toks[-1], h)
        toks.append(token)
    return ' '.join(toks)

def predict(net, tkn, h=None):
  # tensor inputs
  x = np.array([[token2int[tkn]]])
  inputs = torch.from_numpy(x)
  # push to GPU
  inputs = inputs.cuda()
  # detach hidden state from history
  h = tuple([each.data for each in h])
  # get the output of the model
  out, h = net(inputs, h)
  # get the token probabilities
  p = F.softmax(out, dim=1).data
  p = p.cpu()
  p = p.numpy()
  p = p.reshape(p.shape[1],)
  # get indices of top 3 values
  top_n_idx = p.argsort()[-3:][::-1]
  # randomly select one of the three indices
  sampled_token_index = top_n_idx[random.sample([0,1,2],1)[0]]
  # return the encoded value of the predicted char and the hidden state
  return int2token[sampled_token_index], h
