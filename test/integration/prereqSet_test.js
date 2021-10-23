// CONTRIBUTOR: John Cheong
'use strict';

const request = require('supertest'); 
const app = require('../../server.js');
const assert = require('assert')

const dummy_reload = require("../../app/dummy/reload")

describe('The prerequisites route and controller',()=>{
  before(function(done){
      dummy_reload.reload().then(() => { done() })
  })

  it('retrieves all prerequisite sets through get request', (done)=>{
    request(app).get('/api/prereqset/all').end(
    (err,response)=>{
      console.log(response.body)
      console.log(response.body.length)
      assert(response.body.length==5)
      done()
    }
    )
  })

  it('retrieves all prerequisite sets through post request with course foreign key of 1', (done)=>{
    request(app).post('/api/prereqset/coursefk').send({course_fk: 1}).end(
    (err,response)=>{
      console.log(response.body)
      console.log(response.body.length)
      assert(response.body.length==1)
      assert(response.body[0].setNumber===2)
      assert(response.body[0].course_fk===1)
      done()
    }
    )
  })


  // it('creates one message through post request without message id',(done)=>{
  //   request(app).post('/api/message/create').send({text: 'test message', senderAccountId:1, receiverAccountId:2}).end(
  //     (err,response)=>{
  //       assert(response.body.text == "test message")
  //       assert(response.body.senderAccountId == 1)
  //       assert(response.body.receiverAccountId == 2)
  //       done()
  //     }
  //   )
  // })

  // it('creates one message through post request with message id',(done)=>{
  //   request(app).post('/api/message/create').send({messageId: 9, text: 'test message', senderAccountId:1, receiverAccountId:2}).end(
  //     (err,response)=>{
  //       assert(response.body.messageId == 9)
  //       assert(response.body.text == "test message")
  //       assert(response.body.senderAccountId == 1)
  //       assert(response.body.receiverAccountId == 2)
  //       done()
  //     }
  //   )
  // })

  // it('updates one message through post request with message id',(done)=>{
  //   request(app).post('/api/message/update').send({messageId: 9, text: 'update message test'}).end(
  //     (err,response)=>{
  //       console.log(response.body)
  //       assert(response.body.message == "Message was updated successfully.")
  //       done()
  //     }
  //   )
  // })

  // it('deletes message 9 through post request',(done)=>{
  //   request(app).post('/api/message/delete').send({messageId: 9}).end(
  //     (err,response)=>{
  //       assert(response.body.message == "Message was deleted successfully!")
  //       done()
  //     }
  //   )
  // })

  // it('retrieves one message through get request',(done)=>{
  //   request(app).get('/api/message/1').end(
  //     (err,response)=>{
  //       assert(response.body.text == 'Hi SoonHao, Robin Here')
  //       assert(response.body.senderAccountId == 1)
  //       assert(response.body.receiverAccountId == 2)
  //       done()
  //     }
  //   )
  // })

  // it('retrieves all message sent by account 4 and received by account 7 through post request', (done)=>{
  //   request(app).post('/api/message/pair').send({senderAccountId:4, receiverAccountId: 7}).end(
  //   (err,response)=>{
  //     console.log(response.body)
  //     console.log(response.body.length)
  //     assert(response.body.length==2)
  //     done()
  //   }
  //   )

    
  // })

  // it('retrieves all message sent by account 1 and received by account 2 through post request', (done)=>{
  //   request(app).post('/api/message/pair').send({senderAccountId:1, receiverAccountId: 2}).end(
  //   (err,response)=>{
  //     console.log(response.body)
  //     console.log(response.body.length)
  //     assert(response.body.length==3)
  //     done()
  //   }
  //   )

    
  // })

  // it('retrieves all message by account 4 where he is both sender or receiver through post request', (done)=>{
  //   request(app).post('/api/message').send({id:4}).end(
  //   (err,response)=>{
  //     console.log(response.body)
  //     console.log(response.body.length)
  //     assert(response.body.length==4)
  //     done()
  //   }
  //   )
  // })
})

