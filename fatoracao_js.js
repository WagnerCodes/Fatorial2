 function calcularFatorial() {
            let num = document.getElementById("number").value;
            if (num < 1 || num > 20) {
                document.getElementById("resultado").innerText = "Por favor, insira um número entre 1 e 20.";
                return;
            }
            let fatorial = 1;
            for (let i = 1; i <= num; i++) {
                fatorial *= i;
            }
            document.getElementById("resultado").innerText = "O fatorial de " + num + " é: " + fatorial;
        }