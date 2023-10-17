from fastapi import FastAPI
from fastapi.responses import JSONResponse
from sentence_transformers import SentenceTransformer
from elasticsearch import Elasticsearch

app = FastAPI()

model = SentenceTransformer('distiluse-base-multilingual-cased-v1')
es = Elasticsearch(
    "https://localhost:9200",
    basic_auth=("elastic","yr*Y_wWrpiA+99jEYKQ5"),
    ca_certs=r"C:\Users\natalia.f\Downloads\elasticsearch-8.10.3-windows-x86_64\elasticsearch-8.10.3\config\certs\http_ca.crt"
)

@app.get("/bert_search/")
async def search(query: str):
    query = query.replace('"', '')
    token_vector = model.encode(query)

    es_query = {
        "size": 50,
        "query": {
            "script_score": {
                "query": {"match_all": {}},
                "script": {
                    "source": "cosineSimilarity(params.query_vector, 'descriptionVector2') + 1.0",
                    "params": {
                        "query_vector": token_vector
                    }
                }
            }
        }
    }

    res = es.search(index="documentos15", body=es_query)
    datas = [hit["_source"] for hit in res["hits"]["hits"]]
    
    return JSONResponse(content={"datas": datas})
