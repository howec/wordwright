import numpy as np
import torch.nn as nn
import torch
import torch.nn.functional as F
import random
import re
import json

# function to generate text
def sample(net, size,token2int,int2token,prime='the'):
    # push to GPU
    net.cuda()
    net.eval()
    # batch size is 1
    h = net.init_hidden(1)
    toks = prime.split()
    # predict next token
    for t in prime.split():
      token, h = predict(net, t, token2int, int2token, h)
    toks.append(token)
    # predict subsequent tokens
    for i in range(size-1):
        token, h = predict(net, toks[-1], token2int, int2token, h)
        toks.append(token)
    return ' '.join(toks)

def predict(net, tkn, token2int, int2token, h=None):
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
# hp_net = WordLSTM() #not valid bc this function is in colab
# hp_net.load_state_dict(torch.load('../stor/hp_model.pt'))
with open('../stor/HP_token2int.json') as f:
  hp_token2int = json.load(f)
with open('../stor/HP_int2token.json') as f:
  hp_int2token = json.load(f)

# got_model = torch.load('../stor/got_model.pt')
with open('../stor/GOT_token2int.json') as f:
  got_token2int = json.load(f)
with open('../stor/GOT_int2token.json') as f:
  got_int2token = json.load(f)

# lotr_model = torch.load('../stor/lotr_model.pt')
with open('../stor/LOTR_token2int.json') as f:
  lotr_token2int = json.load(f)
with open('../stor/LOTR_int2token.json') as f:
  lotr_int2token = json.load(f)

# marvel_model = torch.load('../stor/marvel_model.pt')
with open('../stor/marvel_token2int.json') as f:
  marvel_token2int = json.load(f)
with open('../stor/marvel_int2token.json') as f:
  marvel_int2token = json.load(f)

# cs_model = torch.load('../stor/ChickenSoup_model.pt')
with open('../stor/ChickenSoup_token2int.json') as f:
  cs_token2int = json.load(f)
with open('../stor/ChickenSoup_int2token.json') as f:
  cs_int2token = json.load(f)

#import words
hp_words = np.loadtxt("HP_wordbank.txt", delimiter=",", unpack=False)
got_words = np.loadtxt("gGOT_wordbank.txt", delimiter=",", unpack=False)
lotr_words = np.loadtxt("LOTR_wordbank.txt", delimiter=",", unpack=False)
marvel_words = np.loadtxt("Marvel_wordbank.txt", delimiter=",", unpack=False)
# connection = np.loadtxt("CS_wordbank.txt", delimiter=",", unpack=False)

def createWordbank(source,no_writers):
    n = 5 #n is the amount of words per writer
    words = []
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

    wordbank = random.choices(words, k=no_writers*n)

    # print(wordbank)

    return wordbank

def createPrompt(source):
    # prompt = None
    # if source == "Harry Potter":
    #     prompt = sample(hp_model,5,hp_token2int,hp_int2token)
    # elif source == "Game of Thrones":
    #     prompt = sample(got_model,5,got_token2int,got_int2token)
    # elif source == "Lord of the Rings":
    #     prompt == sample(lotr_model,5,lotr_token2int,lotr_int2token)
    # elif source == "Marvel":
    #     prompt == sample(marvel_model,5,marvel_token2int,marvel_int2token)
    # elif source == "Connection":
    #   prompt = sample(connection_model,5,cs_token2int,cs_int2token)

    # print(prompt)

    # return prompt
    return "Prompt models under development"

final_wordbank = createWordbank("Harry Potter",2)
final_prompt = createPrompt("Harry Potter")

print(final_wordbank)
print(final_prompt)



