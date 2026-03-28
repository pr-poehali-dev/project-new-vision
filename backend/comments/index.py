import json
import os
import psycopg2

SCHEMA = "t_p38576080_project_new_vision"

def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"], sslmode="disable")

def handler(event: dict, context) -> dict:
    """Получение и добавление комментариев пользователей."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    method = event.get("httpMethod", "GET")

    if method == "GET":
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(f"SELECT id, author_name, content, created_at FROM {SCHEMA}.comments ORDER BY created_at DESC LIMIT 50")
        rows = cur.fetchall()
        cur.close()
        conn.close()
        comments = [
            {"id": r[0], "author_name": r[1], "content": r[2], "created_at": r[3].isoformat()}
            for r in rows
        ]
        return {"statusCode": 200, "headers": headers, "body": json.dumps({"comments": comments})}

    if method == "POST":
        body = json.loads(event.get("body") or "{}")
        author_name = (body.get("author_name") or "").strip()[:100]
        content = (body.get("content") or "").strip()
        if not author_name or not content:
            return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "Заполните имя и комментарий"})}
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            f"INSERT INTO {SCHEMA}.comments (author_name, content) VALUES (%s, %s) RETURNING id, created_at",
            (author_name, content),
        )
        row = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()
        return {
            "statusCode": 201,
            "headers": headers,
            "body": json.dumps({"id": row[0], "author_name": author_name, "content": content, "created_at": row[1].isoformat()}),
        }

    return {"statusCode": 405, "headers": headers, "body": json.dumps({"error": "Method not allowed"})}