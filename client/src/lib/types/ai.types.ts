
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
 
A
I
P
r
o
v
i
d
e
r
T
y
p
e
 
=
 
"
G
E
M
I
N
I
"
 
|
 
"
G
R
O
Q
"
 
|
 
"
O
P
E
N
R
O
U
T
E
R
"
 
|
 
"
C
O
D
E
S
T
R
A
L
"
 
|
 
"
C
L
A
U
D
E
"
;


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
 
A
I
S
e
r
v
i
c
e
T
y
p
e
 
=


 
 
|
 
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
R
E
S
U
M
E
_
G
E
N
"


 
 
|
 
"
L
A
T
E
X
_
C
H
A
T
"


 
 
|
 
"
E
M
A
I
L
_
C
H
A
T
"


 
 
|
 
"
A
I
_
R
O
A
D
M
A
P
_
G
E
N
E
R
A
T
I
O
N
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
 
A
I
S
e
r
v
i
c
e
C
o
n
f
i
g
 
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
e
r
v
i
c
e
:
 
A
I
S
e
r
v
i
c
e
T
y
p
e
;


 
 
p
r
o
v
i
d
e
r
:
 
A
I
P
r
o
v
i
d
e
r
T
y
p
e
;


 
 
m
o
d
e
l
N
a
m
e
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
I
R
e
q
u
e
s
t
S
t
a
t
s
 
{


 
 
b
y
P
r
o
v
i
d
e
r
:
 
{
 
p
r
o
v
i
d
e
r
:
 
A
I
P
r
o
v
i
d
e
r
T
y
p
e
;
 
c
o
u
n
t
:
 
n
u
m
b
e
r
;
 
a
v
g
L
a
t
e
n
c
y
M
s
:
 
n
u
m
b
e
r
 
}
[
]
;


 
 
b
y
S
e
r
v
i
c
e
:
 
{
 
s
e
r
v
i
c
e
:
 
A
I
S
e
r
v
i
c
e
T
y
p
e
;
 
c
o
u
n
t
:
 
n
u
m
b
e
r
 
}
[
]
;


 
 
t
o
t
a
l
R
e
q
u
e
s
t
s
:
 
n
u
m
b
e
r
;


 
 
a
v
g
L
a
t
e
n
c
y
M
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
r
r
o
r
C
o
u
n
t
:
 
n
u
m
b
e
r
;


 
 
e
r
r
o
r
R
a
t
e
:
 
n
u
m
b
e
r
;


}




/
/
 
L
a
T
e
X
 
C
h
a
t


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
 
L
a
t
e
x
C
h
a
t
M
e
s
s
a
g
e
 
{


 
 
r
o
l
e
:
 
"
u
s
e
r
"
 
|
 
"
a
s
s
i
s
t
a
n
t
"
;


 
 
c
o
n
t
e
n
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
L
a
t
e
x
?
:
 
s
t
r
i
n
g
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
 
L
a
t
e
x
C
h
a
t
R
e
s
p
o
n
s
e
 
{


 
 
r
e
p
l
y
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
L
a
t
e
x
?
:
 
s
t
r
i
n
g
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
 
C
h
a
t
M
e
s
s
a
g
e
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
r
o
l
e
:
 
"
u
s
e
r
"
 
|
 
"
a
s
s
i
s
t
a
n
t
"
;


 
 
c
o
n
t
e
n
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


