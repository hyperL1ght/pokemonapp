# pokemonapp

A simple web app built with `Flash`, `JQuery` and `d3.js` which allows user to predict a pokemon's type based on its features (models built using `scikit-learn`).  

### Step 1: Building classifiers 

- For details see `model.ipynb`

### Step 2: Build the web-app

![alt text](imgs/screen_record.gif)

- Tested on Google Chrome ver. 79, Firefox ver. 72 and Microsoft Edge ver. 44, screen_record performed on Google Chrome
- Custom range slider currently doesn't displayed correct on IE, it's working correctly though 

### Step 3: Deployment 

- TODO 

### Improvements:

- Add option to combine 3 models (i.e., an ensemble model)
- Add pop-up info (i.e., feature definition, data source, model overview etc.,)
- Refactor the app to use `Flask` + `Vue.js` 

### Data source

- https://www.kaggle.com/abcsds/pokemon

### To run locally 

1. Clone this repo: `git clone https://github.com/hyperL1ght/pokemonapp.git`
2. Go the project folder: `cd pokemonapp`
3. Create a virtual environment named *venv* to run our app `python3 -m venv venv`, I used python 3.7
4. Activate the virtual environment:
    - on Window: `venv\Scripts\activate`
    - on Linux:  `source venv/bin/activate`
5. Install required packages: `pip install -r requirements.txt`
6. Run the app locally: `python app.py`, 
- If everything works as expected, you should be something similar to this:
![alt text](imgs/flask_output.PNG)
- The web app is running at: `http://127.0.0.1:5000/` or `http://localhost:5000/`