// Import the code which we want to test 
// In this case we want to check the handler all Rount
const handler = require('/practice/First_Project/lib/handler');
test('Test for HomePage Render',()=>{
    const req ={};
    const res = {render:jest.fn()};
    // In this case jest make render object as mock method using the jest.fn() which is should check if the render arguments 
    handler.home(req,res);
    expect(res.render.mock.calls.length).toBe(1);   
    expect(res.render.mock.calls[0][0]).toBe('home');    // Here we checking the render argumet ACTUAL ARGUMET = res.render('home') which is checked by the mock.calls[0][0]
                                                        // I which [0][0] reffred as the first argumet which is compared by .toBe('home')   
})

test('Test for about Render',()=>{
    const req ={};
    const res = {render:jest.fn()}; 
    handler.about(req,res);
    expect(res.render.mock.calls.length).toBe(1);   
    expect(res.render.mock.calls[0][0]).toBe('about');
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
        fortune:expect.stringMatching('//W\\'),
    }))
})

test('Test for notFound Render',()=>{
    const req ={};
    const res = {render:jest.fn()}; 
    handler.notfound(req,res);
    expect(res.render.mock.calls.length).toBe(1);   
    expect(res.render.mock.calls[0][0]).toBe('404');   
})

test('Test for serverError Render',()=>{
    const err = new Error('some Error Occured')
    const req ={};
    const res = {render:jest.fn()}; 
    const next = jest.fn();
    handler.serverError(err,req,res,next);
    expect(res.render.mock.calls.length).toBe(1);   
    expect(res.render.mock.calls[0][0]).toBe('500');   
})

