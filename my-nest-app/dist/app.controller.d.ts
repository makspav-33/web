import { AppService } from './app.service';
import { ContactFormDto } from './contact.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    submitContactForm(contactData: ContactFormDto): Promise<{
        success: boolean;
        message: string;
        id: string | undefined;
    }>;
}
