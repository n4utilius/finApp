
import webapp2
import os
from google.appengine.ext.webapp import template


class MainHandler(webapp2.RequestHandler):
    
    def get(self):
        template_values = dict()
        path = os.path.join(os.path.dirname(__file__),'templates', 'index.html')
        self.response.out.write(template.render(path, template_values))

class CardHandler(webapp2.RequestHandler):
    
    def get(self):
        template_values = dict()
        path = os.path.join(os.path.dirname(__file__),'templates', 'tarjetas.html')
        self.response.out.write(template.render(path, template_values))


        
app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/tarjetas', CardHandler),
], debug=True)
