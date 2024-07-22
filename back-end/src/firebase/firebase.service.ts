import { Injectable, Logger } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccount from './firebase-service-account.json';

@Injectable()
export class FirebaseService {
  private firebaseApp: admin.app.App;
  private readonly logger = new Logger(FirebaseService.name);

  constructor() {
    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }

  async verifyIdToken(idToken: string) {
    try {
      return await this.firebaseApp.auth().verifyIdToken(idToken);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
