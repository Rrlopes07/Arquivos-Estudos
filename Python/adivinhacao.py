from random import randrange


def jogar():

    print('*********************************\nBem vindo ao jogo de adivinhação!\n*********************************\n')

    numero_secreto = randrange(1, 101)
    pontos = 1000

    print('Qual nível de dificuldade?\n(1) Fácil (2) Médio (3) Difícil')
    nivel = int(input('Defina um nível: '))

    if nivel == 1:
        tentativas = 20
    elif nivel == 2:
        tentativas = 10
    else:
        tentativas = 5

    for rodada in range(1, tentativas+1):
        print(f'Tentativa {rodada} de {tentativas}\n')
        chute = int(input('Digite um número entre 1 e 100: '))

        if chute < 1 or chute > 100:
            print('\nVocê deve digitar um número entre 1 e 100.\n')
            continue

        acertou = numero_secreto == chute
        maior = chute > numero_secreto
        pontos_perdidos = abs(numero_secreto - chute)

        print(f'\nVocê digitou {chute}\n')

        if acertou:
            print(f'Parabéns! Você acertou e ganhou {pontos} pontos!\n')
            break
        elif maior:
            print('Você errou! O número que você chutou foi maior que o número secreto.\n')
        else:
            print('Você errou! O número que você chutou foi menor que o número secreto.\n')
        pontos -= pontos_perdidos
        rodada += 1

    print('Fim do jogo.')


if __name__ == '__main__':
    jogar()
