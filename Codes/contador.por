programa
{
	funcao inicio()
	{
		inteiro numero,conta=0
		
		escreva("\n Contador\n----------\n\nDigite o número para ser contado: ")leia(numero)

		limpa()

		escreva("\n Contador\n----------\n\n")
		
		enquanto(conta<numero){
			
			conta=conta+1

			escreva(conta)
			
			se(conta<numero){
				escreva("\n\n")
			}
		}
		
		escreva("\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 345; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */