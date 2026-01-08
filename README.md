# projeto-dio-blog-angular-java

🔎 Funcionalidade de Pesquisa (Filtro de Comentários)
O projeto possui um campo de pesquisa que permite ao usuário filtrar comentários pelo nome, utilizando os dados carregados do backend (JSON‑Server).
A filtragem é feita no frontend, sem novas requisições ao servidor.

📥 Carregando os dados do backend
Quando o componente é iniciado, todos os posts são buscados no backend e armazenados em duas listas:

- listPost → lista exibida na tela
- listPostOriginal → cópia da lista completa, usada para restaurar os dados após a pesquisa
findPosts() {
  this.postService.getPosts().subscribe((data: Post[]) => {
    this.listPost = data;
    this.listPostOriginal = data; // mantém a lista original
  });
}

🔍 Campo de pesquisa no HTML
O usuário digita o nome que deseja buscar e clica no botão Pesquisar:
<input
  type="text"
  class="form-control mb-3 w-100"
  placeholder="Pesquisar..."
  [(ngModel)]="pesquisa"
/>

<button class="btn btn-outline-warning w-100" (click)="filtrarPosts()">
  Pesquisar
</button>

🧠 Lógica de filtragem no componente
O método filtrarPosts() compara o texto digitado com o nome de cada comentário:
filtrarPosts() {
  if (!this.pesquisa) {
    this.listPost = this.listPostOriginal; // restaura a lista completa
    return;
  }

  this.listPost = this.listPostOriginal.filter(post =>
    post.nome.toLowerCase().includes(this.pesquisa.toLowerCase())
  );
}

✔️ Como funciona:

- Se o campo estiver vazio → a lista completa é restaurada
- Se houver texto → apenas os posts cujo nome contém o termo digitado são exibidos
- A busca é case‑insensitive (não diferencia maiúsculas/minúsculas)

🎯 Resultado
Com essa implementação, o usuário pode:

- Buscar comentários pelo nome
- Alternar entre diferentes buscas
- Limpar o campo e ver todos os comentários novamente
Tudo isso sem recarregar a página e sem novas chamadas ao backend.
