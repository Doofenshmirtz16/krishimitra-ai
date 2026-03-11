import sys
import os
import shutil
import uuid

# Add project root to Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from models.plant_disease.predict import predict_disease


def detect_disease(file):

    os.makedirs("temp", exist_ok=True)

    unique_filename = f"{uuid.uuid4()}.jpg"

    upload_path = os.path.join("temp", unique_filename)

    with open(upload_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = predict_disease(upload_path)

    os.remove(upload_path)  # cleanup

    return result