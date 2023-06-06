document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
  
    // Obtenha os valores inseridos pelo usuário
    var name = document.getElementById('name').value;
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
  
    // Verifique se a altura e o peso são números válidos
    if (isNaN(height) || isNaN(weight)) {
      alert('Por favor, insira valores numéricos válidos.');
      return;
    }
  
    // Calcule o IMC
    var imc = weight / (height * height);
    var classification = '';
  
    // Classifique o IMC de acordo com os grupos mencionados
    if (imc < 18.5) {
      classification = 'Baixo peso - Baixo risco de comorbidade';
    } else if (imc < 24.9) {
      classification = 'Peso normal - Médio risco de comorbidade';
    } else if (imc < 29.9) {
      classification = 'Pré obeso - Aumentado risco de comorbidade';
    } else if (imc < 34.9) {
      classification = 'Obeso I - Moderado risco de comorbidade';
    } else if (imc < 39.9) {
      classification = 'Obeso II - Grave risco de comorbidade';
    } else {
      classification = 'Obeso III - Muito grave risco de comorbidade';
    }
  
    // Exiba o resultado na outra página
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p><span>Nome:</span> ' + name + '</p>' +
                          '<p><span>IMC:</span> ' + imc.toFixed(2) + '</p>' +
                          '<p><span>Classificação:</span> ' + classification + '</p>';
  });
  