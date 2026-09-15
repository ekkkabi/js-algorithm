def solution(brown, yellow):
    answer = []
    size = brown + yellow
    
    for r in range(1, size):
        c = size // r
        if( c*r == size and r>=c and (r-2)*(c-2)==yellow):
            answer = [r,c]
            break     
            
    return answer