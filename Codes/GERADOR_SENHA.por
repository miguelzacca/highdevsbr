programa 
{
	inclua biblioteca Util --> u
	
	funcao inicio()
    {
		inteiro numero_caracteres,sinal=0,sorteio,sinal5=1
		caracter resultado1=' ',pergunta

		escreva("\n GERADOR DE SENHA\n------------------\n\nDigite o número de caracteres: ")leia(numero_caracteres)

		enquanto(sinal5==1){
			
			limpa()
			
			escreva("\n GERADOR DE SENHA\n------------------\n\nResultado: ")

			enquanto(sinal<numero_caracteres){

				se(numero_caracteres>100){
					limpa()
					escreva("\n GERADOR DE SENHA\n------------------\n\nResultado desconhecido. Muitos caracteres.\n")
					pare
				}
				sorteio=u.sorteia(1,9)

				se(sorteio==1 ou sorteio==7){
					caracter especial1[]={'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k',
						'l','z','x','c','v','b','n','m'}
					resultado1=especial1[u.sorteia(0,25)]
				}
				senao se(sorteio==2){
					caracter especial2[]={'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K',
						'L','Z','X','C','V','B','N','M'}
					resultado1=especial2[u.sorteia(0,25)]
				}
				senao se(sorteio==3 ou sorteio==5 ou sorteio==6 
					ou sorteio==9){	
						caracter especial3[]={'0','1','2','3','4','5','6','7','8','9'}
						resultado1=especial3[u.sorteia(0,9)]
				}
				senao se(sorteio==4 ou sorteio==8){
					caracter especial4[]={'!','@','%','$','#','&','+','-','?','='}
					resultado1=especial4[u.sorteia(0,9)]
				}		
				escreva(resultado1)
				sinal++
			}
			sinal5=0
			escreva("\n\nDeseja repetir? ")leia(pergunta)
		
			se(pergunta=='s' ou pergunta=='S'){
				sinal=0
				sinal5=1
			}
			senao{
				limpa()
				escreva("\n GERADOR DE SENHA\n------------------\n")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 0; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */