import { Controller, Get, Param, ParseIntPipe, Render } from '@nestjs/common';

@Controller()
export class AppController {

    @Get('/')
    @Render('index')
    public home(): Object {
        return {};
    }

    @Get(':id')
    @Render('[id]')
    public blogPost(@Param('id') id: string): Object {
        return {};
    }

    @Get('/api/blog-posts')
    public listBlogPosts(): any {
        //return this.appService.getBlogPosts();
    }

    @Get('/api/blog-posts/:id')
    public getBlogPostById(@Param('id', new ParseIntPipe()) id: number): any {
        //return this.appService.getBlogPost(id);
    }
}
