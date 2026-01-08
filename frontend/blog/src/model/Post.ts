export class Post {
    id?: number;   // opcional, sem valor inicial
    nome: string = "";
    mensagem: string = "";

    pesquisa: string = "";

    listPostOriginal!: Post[];
}