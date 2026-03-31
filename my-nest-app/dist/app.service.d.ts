import { ContactFormDto } from './contact.dto';
export declare class AppService {
    private resend;
    sendContactEmail(data: ContactFormDto): Promise<{
        success: boolean;
        message: string;
        id: string | undefined;
    }>;
}
