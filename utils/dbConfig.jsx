
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { neon } from "@neondatabase/serverless";
const sql = neon(
    "postgresql://finan-smart_owner:uk3aed9QZotj@ep-wispy-breeze-a5iadk8t.us-east-2.aws.neon.tech/finan-smart?sslmode=require"
  );
  export const db = drizzle(sql, { schema });
  