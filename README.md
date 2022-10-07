# Do It Bro

An application designed to monitor a user's everyday activities. It contains feature that make it easier for users to add the jobs they wish to accomplish.

## Installing and Getting Started

A brief introduction of the application's prerequisites and setup.

- ### Clone the Repository
  Firstly, the a repository is cloned from GitHub. In order to achieve this, drop down code button and copy the SSH key. Then open the command propmt and go the folder where you want to clone this project. After this run the command<br>
  `git clone https://github.com/your/your-project.git`
- ### Install Client Dependencies
  1. `cd client`
  2. Install expo cli<br>
     `npm install -g expo-cli`
- ### Install Server Dependencies

  1. Create virtual environment<br>
     `python -m venv venv`
  2. Activate the environment<br>
     - For Linux or Mac users, run the following in the command prompt <br>
       `source venev/bin/activate`<br>
     - For windows user, run the following in command prompt<br>
       `venv\Scripts\activate`
  3. In order to automatically manage dependencies in requirements.txt using pip as a package manager run<br>
     `pip install -r requirements.txt`
  4. Run all migrations<br>
     `cd server && python.manage.py migrate`

- ### Now run two terminals one for client and one for server

  - Run client

    1.  `cd client`
    2.  `npm start`<br>
        After this a QR code will appear in command propmt and client server will start.

  - Run server
    1. `cd server`
    2. `python manager.py runserver`

- ### Install **Expo Go** app from playstore. After the app is installed, scan the QR code that appeared on the client side to open the project on android device.
