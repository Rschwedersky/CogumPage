
import brancoEspecie from './../assets/especies/brancoEspecie.webp'
import amareloEspecie from './../assets/especies/amareloEspecie.webp'
import lionsEspecie from './../assets/especies/lionsEspecie.webp'
import perolaEspecie from './../assets/especies/perolaEspecie.webp'
import rosaEspecie from './../assets/especies/rosaEspecie.webp'
import shimofuriEspecie from './../assets/especies/shimofuriEspecie.webp'



  
    const cogums = [
    {
      name: 'Pleurotus Ostreatus',
      comName:'Shimeji branco',
      image: brancoEspecie,
      estacao: ['verao','inverno'],
      descricao:'O Shimeji branco (Pleurotus ostreatus ) é uma fonte rica em proteínas, vitaminas, minerais, fibras e outros antioxidantes como o selênio, protegendo as células do corpo de danos que podem levar a doenças crônicas e ajudam a fortalecer o sistema imunológico. Possui baixas calorias, sem gordura, sem colesterol, sem glúten e com baixo teor de sódio. O consumo contínuo de Shimeji parece diminuir o risco de obesidade, diabetes, câncer, doenças cardíacas e fortalecer o sistema imune do corpo.',
      referência: 'https://mushroomreferences.com'
    },
    {
      name: 'Pleurotus Citrinopilleatus',
      comName:'Shimeji amarelo',
      image: amareloEspecie,
      estacao: ['verao','inverno'],
      descricao:'O Shimeji amarelo (Pleurotus Citrinopileatus) é uma fonte rica em proteínas, vitaminas, minerais, fibras e outros antioxidantes como o selênio, protegendo as células do corpo de danos que podem levar a doenças crônicas e ajudam a fortalecer o sistema imunológico. Possui baixas calorias, sem gordura, sem colesterol, sem glúten e com baixo teor de sódio. O consumo contínuo de Shimeji parece diminuir o risco de obesidade, diabetes, câncer, doenças cardíacas e fortalecer o sistema imune do corpo.',
      referência: 'https://mushroomreferences.com'
    },
    {
      name: 'Hericium erinaceus',
      comName:'Juba de Leão',
      image: lionsEspecie,
      estacao: ['verao','inverno'],
      descricao:'O cogumelo Lions Mane (Hericium erinaceus) também é conhecido como hou tou gu ou yamabushitake e eles receberam seu nome moderno pela aparência à medida que cresce. É um cogumelo branco, grande e desgrenhado que se assemelha a uma juba de leão branco. Doenças neurodegenerativas como Alzheimer e demência são condições que resultam da degeneração celular no cérebro. A capacidade do nosso cérebro de conectar novas conexões diminui com o tempo e essa é uma possível explicação para o fato de que, quando envelhecemos, tendemos a enfraquecer as funções do nosso cérebro. Estudos descobriram que existem dois compostos especiais nos cogumelos juba de leão que podem estimular o crescimento das células cerebrais: hericenonas e erinacinas.',
      referência: 'https://mushroomreferences.com'
    },
    {
      name: 'Pleurotus Ostreatus',
      comName:'Shimeji pérola',
      image: perolaEspecie,
      estacao: ['verao','inverno'],
      descricao:'O Shimeji branco (Pleurotus ostreatus ) é uma fonte rica em proteínas, vitaminas, minerais, fibras e outros antioxidantes como o selênio, protegendo as células do corpo de danos que podem levar a doenças crônicas e ajudam a fortalecer o sistema imunológico. Possui baixas calorias, sem gordura, sem colesterol, sem glúten e com baixo teor de sódio. O consumo contínuo de Shimeji parece diminuir o risco de obesidade, diabetes, câncer, doenças cardíacas e fortalecer o sistema imune do corpo.',
      referência: 'https://mushroomreferences.com'
    },
    {
      name: 'Pleurotus Djamor',
      comName:'Shimeji rosa',
      image: rosaEspecie,
      estacao: ['verao','inverno'],
      descricao:'O Shimeji rosa (Pleurotus djamor ) é uma fonte rica em proteínas, vitaminas, minerais, fibras e outros antioxidantes como o selênio, protegendo as células do corpo de danos que podem levar a doenças crônicas e ajudam a fortalecer o sistema imunológico. Possui baixas calorias, sem gordura, sem colesterol, sem glúten e com baixo teor de sódio. O consumo contínuo de Shimeji parece diminuir o risco de obesidade, diabetes, câncer, doenças cardíacas e fortalecer o sistema imune do corpo.',
      referência: 'https://mushroomreferences.com'
    },
    {
      name: 'Pleurotus Ostreatus',
      comName:'Shimeji premium',
      image: shimofuriEspecie,
      estacao: ['verao','inverno'],
      descricao:'O Shimeji branco (Pleurotus ostreatus ) é uma fonte rica em proteínas, vitaminas, minerais, fibras e outros antioxidantes como o selênio, protegendo as células do corpo de danos que podem levar a doenças crônicas e ajudam a fortalecer o sistema imunológico. Possui baixas calorias, sem gordura, sem colesterol, sem glúten e com baixo teor de sódio. O consumo contínuo de Shimeji parece diminuir o risco de obesidade, diabetes, câncer, doenças cardíacas e fortalecer o sistema imune do corpo.',
      referência: 'https://mushroomreferences.com'
    },
    ]

    export const getCogums = () => {
        return cogums;
      };