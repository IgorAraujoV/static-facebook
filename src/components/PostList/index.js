import React, { Component } from "react";

import profile from '../../assets/my_profile.jpg';
import './style.css'
import Post from '../Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Messi",
          avatar: "https://tribunadejundiai.com.br/wp-content/uploads/2019/06/Messi-constr%C3%B3i-o-maior-centro-de-c%C3%A2ncer-infantil-da-Europa-1.jpeg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7ctn1jEnhLfdDbq88x19ExPmUEkZM2NLDmuSIz3jwTwnBcnoJ"
            },
            content: "Opa Messi, tem github? ;)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Cristiano Ronaldo",
          avatar: "https://i0.statig.com.br/bancodeimagens/73/jt/tu/73jttuqov5k9idx6qs89zpv3y.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando? Estou necessitado,"
                + "Obrigado. SIIIIIII!",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7ctn1jEnhLfdDbq88x19ExPmUEkZM2NLDmuSIz3jwTwnBcnoJ"
            },
            content: "Opa Cristiano, tem github e LinkedIn? "
                    + "O nosso processo seletivo não é tão fácil quanto fazer gol embaixo da trave kkk ;)"
          },
          {
            id: 2,
            author: {
              name: "Igor Araújo",
              avatar: profile
            },
            content: "Vish, dizem que o Messi já ganhou a vaga :D"
          },
        ]
      },
    ]
  };
  render() {
    return (
    <div className='postList'>
      {this.state.posts.map(post =>
        <Post key={post.id} data={post}/>
      )}
    </div>
    )
  }
}

export default PostList;
