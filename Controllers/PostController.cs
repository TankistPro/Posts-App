using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NetCoreAngular.Models;
using Microsoft.AspNetCore.Mvc;

namespace NetCoreAngular.Controllers
{
    [ApiController]
    [Route("api/posts")]
    public class PostController
    {
        [HttpGet]
        public IEnumerable<Post> Get()
        {
            List<Post> posts = new List<Post>
            {
                new Post {userId=1, id=1, title="Тест", body="Боди тестового поста"},
                new Post {userId=2, id=2, title="Тест2", body="Боди тестового поста2"}
            };

            return posts;
         }
    }
}
