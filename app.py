from flask import Flask, request, jsonify, render_template
import numpy as np
import pickle

app = Flask(__name__) #Initialize the flask App

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    model_name = "{}.pkl".format(request.form['method'])
    model = pickle.load(open('models/{}'.format(model_name), 'rb'))

    int_features = [int(v) for k, v in request.form.items() if k != "method"]
    final_features = [np.array(int_features)]
    prediction = model.predict_proba(final_features).tolist()[0]
    labels = model.classes_
    data = [{"class":l, "prob":p} for l, p in zip(labels, prediction)] # list of dict
    params = [{'param': k, 'value': v} for k, v in request.form.items()]

    return render_template('predict.html', plot_data=data, params = params)

if __name__ == "__main__":
    app.run(debug=True)