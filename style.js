const infos = {
  nome: "Pat Linha",
  cargo: "QA",
  foto: "http://github.com/patlinha.png",
  github: "http://github.com/patlinha-fs",
  linkedin: "http://github.com/patlinha-fs",
  instagram: "http://github.com/patlinha-fs",
  minibio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore blanditiis libero modi at pariatur maxime ipsam obcaecati perferendis suscipit quam eaque accusamus dicta, nulla aut autem necessitatibus enim sunt."
};

document.getElementById('foto').src = infos.imagem;
document.getElementById('nome').innerHTML = infos.nome;
document.getElementById('cargo').innerHTML = infos.cargo;
document.getElementById('minibio').innerHTML = infos.minibio;
document.getElementById('github').href = infos.github;
document.getElementById('linkedin').href = infos.linkedin;
document.getElementById('instagram').href = infos.instagram;
