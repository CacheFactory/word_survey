//= require_tree ./lib

var Response = Backbone.Model.extend({
  name: 'Response',
  url: '/responses'
})

var Word=Backbone.Model.extend({
  name: 'Word'
})

var Adjective=Backbone.Model.extend({
  name: 'Adjective'
})

var Words=Backbone.Collection.extend({
  model:Word
})

var Adjectives=Backbone.Collection.extend({
  model:Adjective
})

var Responses=Backbone.Collection.extend({
  model:Response
})

var MainView= Backbone.View.extend({
  
  initialize:function(){
    this.responses= new Responses()
    this.words=new Words(app_data['words'])
    this.adjectives=new Adjectives(app_data['adjectives'])
    this.render()

    var self =this
    $(window).keydown(function(event){
      self.keyPress(event)
    })
  },

  events:{'click .yes': 'yes',
          'click .no': 'no'},
  
  render:function(){
    this.randomWord=this.words.models[Math.floor(Math.random()*this.words.models.length)]
    this.randomAdjective=this.adjectives.models[Math.floor(Math.random()*this.adjectives.models.length)]
    html = '<div id="holder">Does the word <div id="word">'+this.randomWord.get('word')+'</div> make you think of <div id="adjective">'+this.randomAdjective.get('adjective')+'?</div>'
    html += '<div class="buttons"><a href="#" class="yes">YES</a>&nbsp;&nbsp;<a href="#" class="no">NO</a></div>'
    html += '<div id="instructions">Press the [Y] key, if you agree with the statement. Press the [N] key, if you do not agree.</div>'
   
    html +='<div id="counter"><div>'+this.responses.size()+'</div>Responses</div>'
    $(this.el).html(html)
  },

  yes:function(){
    this.recordResponse(true)
  },
  no:function(){
    this.recordResponse(false)
  },
  keyPress:function(event){
    //console.log(event.type, event.keyCode)
    if(event.keyCode==89){
      this.recordResponse(true)
    }else if(event.keyCode==78){
      this.recordResponse(false)
    } 
    
    
  },
  recordResponse:function(positive){
    var response = new Response({positive:positive,
                                 word_id: this.randomWord.get('id'),
                                 adjective_id:this.randomAdjective.get('id')})
    response.save()
    this.responses.add(response)
    this.render()
  }
})

$(document).ready(function(){
  var mainView = new MainView({el:$('#main')})
})
