import pandas as pd
from elasticsearch import Elasticsearch

# Inicialize o cliente Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200}])

# Carregue os dados do CSV em um DataFrame do Pandas
df = pd.read_csv("data.csv")

# Itere pelo DataFrame e indexe no Elasticsearch
for index, row in df.iterrows():
    doc = {
        'body': row['body'],
        'title': row['title'],
        'date': row['date'],
        'court': row['court'],
        'click_context': row['click_context'],
        'copy_context': row['copy_context'],
        'expanded_copy_context': row['expanded_copy_context']
    }
    es.index(index='index', doc_type='_doc', body=doc)