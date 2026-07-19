import os
import shutil

from app.modules.pdf_extractor import extract_text
from app.modules.cleaner import clean_text
from app.modules.chunker import create_chunks
from app.modules.embeddings import create_embeddings
from app.modules.vector_store import store_embeddings
from app.modules.retriever import retrieve_chunks
from app.modules.generator import analyze_resume


UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


async def analyze_resume_service(uploaded_file, job_description):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        uploaded_file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(uploaded_file.file, buffer)

    text = extract_text(file_path)

    cleaned_text = clean_text(text)

    chunks = create_chunks(cleaned_text)

    embeddings = create_embeddings(chunks)

    collection = store_embeddings(
        chunks,
        embeddings
    )

    results = retrieve_chunks(
        collection,
        job_description
    )

    retrieved_chunks = results["documents"][0]

    analysis = analyze_resume(
        job_description,
        retrieved_chunks
    )

    return analysis