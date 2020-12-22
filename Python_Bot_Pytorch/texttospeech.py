from gtts import gTTS

def tts(msg):
    ouput = gTTS(text=msg, lang="vi", slow = False)
    ouput.save('botspeech.wav')