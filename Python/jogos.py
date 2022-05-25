import adivinhacao
import forca

print('*********************************\nEscolha o seu jogo!\n*********************************\n')

print('(1) Adivinhação (2) Forca')

jogo = int(input('Escolha uma opção: '))

if jogo == 1:
    print('Jogando adivinhação')
    adivinhacao.jogar()
else:
    print('Jogando forca')
    forca.jogar()
