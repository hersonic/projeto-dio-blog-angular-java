import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../service/post';
import { Post } from '../../model/Post';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feed.html',
  styleUrls: ['./feed.css'],
})
export class FeedComponent implements OnInit {

  listPost!: Post[];
  post: Post = new Post();
  nome: string = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts(){
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.listPost = data;
      this.post.listPostOriginal = data;
    });
  }

  cadastrarMensagem() {

    if (!this.post.nome || !this.post.mensagem) {
      alert("Preencha nome e mensagem antes de publicar.");
      return;
    }

    delete this.post.id;

    this.postService.postMensagem(this.post).subscribe((data: Post) => {
      this.post = new Post();
      this.findPosts();
    });
  }

  filtrarPosts() {
    if (!this.post.pesquisa) {
      this.listPost = this.post.listPostOriginal; // volta tudo
      return;
    }

    this.listPost = this.post.listPostOriginal.filter(post =>
      post.nome.toLowerCase().includes(this.post.pesquisa.toLowerCase())
    );
  }



}
