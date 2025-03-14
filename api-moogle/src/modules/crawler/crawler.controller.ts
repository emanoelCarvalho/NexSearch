import { Controller, Get, Query } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Controller('crawler')
export class CrawlerController {
  constructor(private readonly crawlerService: CrawlerService) {}

  @Get()
  async crawl(@Query('url') url: string) {
    if (!url) {
      return { error: 'Por favor, forneça uma URL válida' };
    }
    return this.crawlerService.crawl(url);
  }
}
