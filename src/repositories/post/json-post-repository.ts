import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);
const SIMULATE_WAIT_MS = 5000;

export class JsonPostReposiroty implements PostRepository {
  private async simulateWait() {
    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_MS));
  }

  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    type Post = {
      published: boolean;
    }
    await this.simulateWait();
    console.log('\n' + 'findAllPublic' + '\n');


    const posts = await this.readFromDisk();
    return posts.filter((post: Post) => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find(post => post.id === id);
    if (!post) {
      throw new Error(`Post ${id} não encontrado`);
    }
    return post;
  }
}
