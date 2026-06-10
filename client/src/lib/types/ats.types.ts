
/
/
 
A
T
S
 
S
c
o
r
e


e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
t
s
C
a
t
e
g
o
r
y
S
c
o
r
e
s
 
{


 
 
f
o
r
m
a
t
t
i
n
g
:
 
n
u
m
b
e
r
;


 
 
k
e
y
w
o
r
d
s
:
 
n
u
m
b
e
r
;


 
 
e
x
p
e
r
i
e
n
c
e
:
 
n
u
m
b
e
r
;


 
 
s
k
i
l
l
s
:
 
n
u
m
b
e
r
;


 
 
e
d
u
c
a
t
i
o
n
:
 
n
u
m
b
e
r
;


 
 
i
m
p
a
c
t
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
t
s
K
e
y
w
o
r
d
A
n
a
l
y
s
i
s
 
{


 
 
f
o
u
n
d
:
 
s
t
r
i
n
g
[
]
;


 
 
p
a
r
t
i
a
l
:
 
s
t
r
i
n
g
[
]
;


 
 
m
i
s
s
i
n
g
:
 
s
t
r
i
n
g
[
]
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
A
t
s
S
c
o
r
e
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
s
t
u
d
e
n
t
I
d
:
 
n
u
m
b
e
r
;


 
 
r
e
s
u
m
e
U
r
l
:
 
s
t
r
i
n
g
;


 
 
j
o
b
T
i
t
l
e
?
:
 
s
t
r
i
n
g
;


 
 
j
o
b
D
e
s
c
r
i
p
t
i
o
n
?
:
 
s
t
r
i
n
g
;


 
 
o
v
e
r
a
l
l
S
c
o
r
e
:
 
n
u
m
b
e
r
;


 
 
c
a
t
e
g
o
r
y
S
c
o
r
e
s
:
 
A
t
s
C
a
t
e
g
o
r
y
S
c
o
r
e
s
;


 
 
s
u
g
g
e
s
t
i
o
n
s
:
 
s
t
r
i
n
g
[
]
;


 
 
k
e
y
w
o
r
d
A
n
a
l
y
s
i
s
:
 
A
t
s
K
e
y
w
o
r
d
A
n
a
l
y
s
i
s
;


 
 
c
r
e
a
t
e
d
A
t
:
 
s
t
r
i
n
g
;


 
 
u
p
d
a
t
e
d
A
t
:
 
s
t
r
i
n
g
;


}




/
/
 
U
s
a
g
e
 
t
r
a
c
k
i
n
g


e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
U
s
a
g
e
I
t
e
m
 
{


 
 
a
c
t
i
o
n
:
 
"
A
T
S
_
S
C
O
R
E
"
 
|
 
"
C
O
V
E
R
_
L
E
T
T
E
R
"
 
|
 
"
G
E
N
E
R
A
T
E
_
R
E
S
U
M
E
"
;


 
 
u
s
e
d
:
 
n
u
m
b
e
r
;


 
 
l
i
m
i
t
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
U
s
a
g
e
S
t
a
t
s
 
{


 
 
t
i
e
r
:
 
"
F
R
E
E
"
 
|
 
"
P
R
E
M
I
U
M
"
;


 
 
u
s
a
g
e
:
 
U
s
a
g
e
I
t
e
m
[
]
;


}




/
/
 
C
o
v
e
r
 
L
e
t
t
e
r


e
x
p
o
r
t
 
t
y
p
e
 
C
o
v
e
r
L
e
t
t
e
r
T
o
n
e
 
=
 
"
p
r
o
f
e
s
s
i
o
n
a
l
"
 
|
 
"
f
r
i
e
n
d
l
y
"
 
|
 
"
e
n
t
h
u
s
i
a
s
t
i
c
"
 
|
 
"
t
e
c
h
n
i
c
a
l
"
 
|
 
"
c
r
e
a
t
i
v
e
"
 
|
 
"
f
o
r
m
a
l
"
 
|
 
"
c
o
n
c
i
s
e
"
 
|
 
"
s
t
a
r
t
u
p
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
C
o
v
e
r
L
e
t
t
e
r
I
n
p
u
t
 
{


 
 
j
o
b
D
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
j
o
b
T
i
t
l
e
?
:
 
s
t
r
i
n
g
;


 
 
c
o
m
p
a
n
y
N
a
m
e
?
:
 
s
t
r
i
n
g
;


 
 
k
e
y
S
k
i
l
l
s
?
:
 
s
t
r
i
n
g
;


 
 
t
o
n
e
:
 
C
o
v
e
r
L
e
t
t
e
r
T
o
n
e
;


}


