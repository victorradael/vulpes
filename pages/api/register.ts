import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, query, child } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.DB_API_KEY,
  authDomain: process.env.DB_AUTH_DOMAIN,
  databaseURL: process.env.DB_URL_DO_BANCO_DE_DADOS,
  projectId: process.env.DB_PROJECT_ID,
  storageBucket: process.env.DB_STORAGE_BUCKET,
  messagingSenderId: process.env.DB_SENDER_ID,
  appId: process.env.DB_APP_ID
};

// Inicializa o app do Firebase
const app = initializeApp(firebaseConfig);

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, agree_lgpd } = req.body;

  const db = getDatabase(app);
  const id = uuidv4();
  const date_s = new Date();
  const date = date_s.toISOString();
  const date = Date.now();
  const index = 'interested'
  const newInterestedRef = ref(db, `${index}/${id}`);

  try {
    const mostViewedPosts = query(child(ref(db), index));

    await get(mostViewedPosts).then((snapshot) => {
      const snap = Object.values(snapshot.val() || {})
      const exist = snap.find((object: any) => object.email === email)
      if (exist) {
        res.status(403).json({ message: "Interesse já está cadastrado!" });
      } else {
        res.status(200).json({ message: "Interesse cadastrado!" });
        set(newInterestedRef, {
          name: name,
          email: email,
          date: date,
          agree_lgpd: agree_lgpd
        });
      }
    }).catch((error) => {
      console.error('Erro ao cadastrar interesse:', error);
    });
  } catch (error) {
    console.error("Erro ao salvar dados: ", error);
    res.status(500).json({ error: "Erro ao salvar dados" });
  }
}
