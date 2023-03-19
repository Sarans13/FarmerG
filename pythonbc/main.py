from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import json

app = FastAPI()

origins = [
    "https://iamkcube.github.io",
    "http://127.0.0.1:5500",
    "http://localhost:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/aadhar/{uid}')
def verify_aadhar(uid):
    reqUrl = "https://officeanywhere.io/incometax/ValidateAadhar"
    headersList = {
        "Accept": "*/*",
        "User-Agent": "my-app/0.0.1",
        "Content-Type": "application/json"
    }
    payload = json.dumps({
        "AadharNumber": uid
    })
    response = requests.request(
        "POST", reqUrl, data=payload,  headers=headersList).json()

    return {"is_valid": response}