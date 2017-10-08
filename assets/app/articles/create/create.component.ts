import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Article} from "../article.model";
import {ArticlesService} from "../articles.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateArticlesComponent implements OnInit {
  myForm: FormGroup;

  constructor(private articlesService: ArticlesService) {}

  onSubmit() {
    const article = new Article(
        this.myForm.value.author,
        this.myForm.value.title,
        this.myForm.value.body
    );
    this.articlesService.create(article)
        .subscribe(
            data => console.log(data),
            error => console.error(error)
        );
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      author: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required)
    });
  }
}
