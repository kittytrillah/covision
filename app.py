import flask
from flask import request, jsonify, Response
from flask_cors import CORS
import decimal
from boto3.dynamodb.conditions import Key, Attr
from builtins import Exception, len
import boto3
import json


app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)


# Helper class to convert a DynamoDB item to JSON.
class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            if o % 1 > 0:
                return float(o)
            else:
                return int(o)
        return super(DecimalEncoder, self).default(o)


dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
places_t = dynamodb.Table('places')
contapoints_t = dynamodb.Table('contapoints')


@app.route('/')
def test_connection():
    return 'Connected'


# Checking if we're currently in surveillance zone or not
@app.route('/get_zone', methods=['POST'])
def get_zone():
    try:
        # Here we retrieve json with coordinates and send it to DynamoDB to check if we're currently in zone
        req_data = request.get_json()
        latitude = req_data['latitude']
        longitude = req_data['longitude']
        latitude_rounded = str(round(float(latitude), 4))
        longitude_rounded = str(round(float(longitude), 4))
        response = places_t.get_item(
            Key={
                'sku': value
            }
        )
    except Exception as e:
        print('Error: ', e)
        return None



# Returning points of contamination for AR
@app.route('/get_contapoints')
def get_contapoints():
    pass


@app.route('/set_contapoints', methods=['POST'])
def set_contapoints():
    print("contrapoint being added")
    pass


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=1080, debug=True)
