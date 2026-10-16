import { fetchWithTimeout } from '@/lib/request';
afterEach(()=>{vi.useRealTimers();vi.unstubAllGlobals();});
it('aborts stalled delivery and cleans its timer',async()=>{
 vi.useFakeTimers();
 vi.stubGlobal('fetch',vi.fn((_input,options)=>new Promise((_resolve,reject)=>options.signal.addEventListener('abort',()=>reject(new Error('aborted'))))));
 const pending=fetchWithTimeout('/isolated-test',{},100);
 const result=expect(pending).rejects.toThrow('aborted');
 await vi.advanceTimersByTimeAsync(100);await result;expect(vi.getTimerCount()).toBe(0);
});
it('clears timeout after a normal response',async()=>{
 vi.useFakeTimers();vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:true}));
 expect((await fetchWithTimeout('/isolated-test',{})).ok).toBe(true);expect(vi.getTimerCount()).toBe(0);
});
