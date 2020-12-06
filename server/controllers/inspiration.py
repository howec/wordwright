import numpy as np
import torch.nn as nn
import torch
import torch.nn.functional as F
import random
import re

# function to generate text
def sample(net, size, prime='the'):
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

# import NLG models
hp_model = torch.load('../stor/hp_model.pt')
got_model = torch.load('../stor/got_model.pt')
lotr_model = torch.load('../stor/lotr_model.pt')
marvel_model = torch.load('../stor/marvel_model.pt')
# connection_model = torch.load('../stor/ChickenSoup_model.pt')

#import words
# hp_words = load("hp_wordbank.txt")
# got_words = load("got_wordbank.txt")
# lotr_words = load("got_wordbank.txt")
# marvel_words = load("marvel_wordbank.txt")
# connection = load("marvel_wordbank.txt")

def createWordbank(source,no_writers):
    n = 5 #n is the amount of words per writer
    if source == "Harry Potter":
        words = createWordbank(hp_words,no_writers)
    elif source == "Game of Thrones":
        words = createWordbank(got_words,no_writers)
    elif source == "Lord of the Rings":
        words = createWordbank(lotr_words,no_writers)
    elif source == "Marvel":
        words = createWordbank(marvel_words,no_writers)
    # elif source == "Connection":
    #     words = createWordbank(connectionl_words,no_writers)

    wordbank = random.choices(parent_wordbank, k=no_writers*n)

    print(wordbank)

    return wordbank

def createPrompt(source):
    prompt = None
    if source == "Harry Potter":
        prompt = sample(hp_model,5)
    elif source == "Game of Thrones":
        prompt = sample(got_model,5)
    elif source == "Lord of the Rings":
        prompt == sample(lotr_model,5)
    elif source == "Marvel":
        prompt == sample(marvel_model,5)
    # elif source == "Connection":
    #   prompt = sample(connection_model,5)

    print(prompt)

    return [prompt,wordbank]


