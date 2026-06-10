
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
 
I
n
t
e
r
v
i
e
w
S
o
u
r
c
e
 
=


 
 
|
 
"
O
N
_
C
A
M
P
U
S
"


 
 
|
 
"
O
F
F
_
C
A
M
P
U
S
"


 
 
|
 
"
R
E
F
E
R
R
A
L
"


 
 
|
 
"
L
I
N
K
E
D
I
N
"


 
 
|
 
"
P
O
R
T
A
L
"


 
 
|
 
"
O
T
H
E
R
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
 
I
n
t
e
r
v
i
e
w
D
i
f
f
i
c
u
l
t
y
 
=
 
"
E
A
S
Y
"
 
|
 
"
M
E
D
I
U
M
"
 
|
 
"
H
A
R
D
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
 
I
n
t
e
r
v
i
e
w
O
u
t
c
o
m
e
 
=


 
 
|
 
"
S
E
L
E
C
T
E
D
"


 
 
|
 
"
R
E
J
E
C
T
E
D
"


 
 
|
 
"
W
I
T
H
D
R
A
W
N
"


 
 
|
 
"
P
E
N
D
I
N
G
"


 
 
|
 
"
G
H
O
S
T
E
D
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
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
T
y
p
e
 
=


 
 
|
 
"
T
E
C
H
N
I
C
A
L
"


 
 
|
 
"
C
O
D
I
N
G
"


 
 
|
 
"
D
S
A
"


 
 
|
 
"
S
Y
S
T
E
M
_
D
E
S
I
G
N
"


 
 
|
 
"
H
R
"


 
 
|
 
"
M
A
N
A
G
E
R
I
A
L
"


 
 
|
 
"
B
E
H
A
V
I
O
R
A
L
"


 
 
|
 
"
A
P
T
I
T
U
D
E
"


 
 
|
 
"
G
D
"


 
 
|
 
"
O
T
H
E
R
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
 
I
n
t
e
r
v
i
e
w
Q
u
e
s
t
i
o
n
 
{


 
 
p
r
o
m
p
t
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
p
i
c
?
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
?
:
 
I
n
t
e
r
v
i
e
w
D
i
f
f
i
c
u
l
t
y
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
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
 
{


 
 
n
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


 
 
t
y
p
e
:
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
T
y
p
e
;


 
 
d
u
r
a
t
i
o
n
M
i
n
s
?
:
 
n
u
m
b
e
r
;


 
 
q
u
e
s
t
i
o
n
s
:
 
I
n
t
e
r
v
i
e
w
Q
u
e
s
t
i
o
n
[
]
;


 
 
n
o
t
e
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
 
I
n
t
e
r
v
i
e
w
P
r
e
p
R
e
s
o
u
r
c
e
 
{


 
 
t
y
p
e
:
 
"
a
r
t
i
c
l
e
"
 
|
 
"
b
o
o
k
"
 
|
 
"
c
o
u
r
s
e
"
 
|
 
"
v
i
d
e
o
"
 
|
 
"
o
t
h
e
r
"
;


 
 
t
i
t
l
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
r
l
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
 
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
A
u
t
h
o
r
 
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


 
 
n
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


 
 
p
r
o
f
i
l
e
P
i
c
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
c
o
l
l
e
g
e
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
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
 
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
C
o
m
p
a
n
y
 
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


 
 
n
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


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
l
o
g
o
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
c
i
t
y
:
 
s
t
r
i
n
g
;


 
 
i
n
d
u
s
t
r
y
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
 
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
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


 
 
c
o
m
p
a
n
y
I
d
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
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
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
u
s
e
r
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
o
l
e
:
 
s
t
r
i
n
g
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
Y
e
a
r
s
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
i
n
t
e
r
v
i
e
w
Y
e
a
r
:
 
n
u
m
b
e
r
;


 
 
i
n
t
e
r
v
i
e
w
M
o
n
t
h
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
s
o
u
r
c
e
:
 
I
n
t
e
r
v
i
e
w
S
o
u
r
c
e
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
I
n
t
e
r
v
i
e
w
D
i
f
f
i
c
u
l
t
y
;


 
 
o
u
t
c
o
m
e
:
 
I
n
t
e
r
v
i
e
w
O
u
t
c
o
m
e
;


 
 
o
f
f
e
r
e
d
:
 
b
o
o
l
e
a
n
;


 
 
c
t
c
L
p
a
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
t
o
t
a
l
R
o
u
n
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


 
 
o
v
e
r
a
l
l
R
a
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


 
 
r
o
u
n
d
s
:
 
I
n
t
e
r
v
i
e
w
R
o
u
n
d
[
]
;


 
 
t
i
p
s
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
p
r
e
p
R
e
s
o
u
r
c
e
s
:
 
I
n
t
e
r
v
i
e
w
P
r
e
p
R
e
s
o
u
r
c
e
[
]
;


 
 
i
s
A
n
o
n
y
m
o
u
s
:
 
b
o
o
l
e
a
n
;


 
 
s
t
a
t
u
s
:
 
"
P
E
N
D
I
N
G
"
 
|
 
"
A
P
P
R
O
V
E
D
"
 
|
 
"
R
E
J
E
C
T
E
D
"
;


 
 
u
p
v
o
t
e
s
:
 
n
u
m
b
e
r
;


 
 
v
i
e
w
s
:
 
n
u
m
b
e
r
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


 
 
c
o
m
p
a
n
y
:
 
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
C
o
m
p
a
n
y
 
|
 
n
u
l
l
;


 
 
u
s
e
r
:
 
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
A
u
t
h
o
r
 
|
 
n
u
l
l
;


 
 
h
a
s
U
p
v
o
t
e
d
?
:
 
b
o
o
l
e
a
n
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
 
I
n
t
e
r
v
i
e
w
C
o
m
p
a
n
y
L
i
s
t
I
t
e
m
 
e
x
t
e
n
d
s
 
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
C
o
m
p
a
n
y
 
{


 
 
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


 
 
l
a
t
e
s
t
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


 
 
a
v
g
R
a
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


 
 
r
e
v
i
e
w
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
 
I
n
t
e
r
v
i
e
w
C
o
m
p
a
n
y
S
u
m
m
a
r
y
 
{


 
 
c
o
m
p
a
n
y
:
 
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
 
n
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
 
s
l
u
g
:
 
s
t
r
i
n
g
;
 
l
o
g
o
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
}
;


 
 
t
o
t
a
l
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
l
e
c
t
i
o
n
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
 
|
 
n
u
l
l
;


 
 
a
v
g
R
o
u
n
d
s
:
 
n
u
m
b
e
r
 
|
 
n
u
l
l
;


 
 
b
y
D
i
f
f
i
c
u
l
t
y
:
 
{
 
d
i
f
f
i
c
u
l
t
y
:
 
I
n
t
e
r
v
i
e
w
D
i
f
f
i
c
u
l
t
y
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


 
 
b
y
O
u
t
c
o
m
e
:
 
{
 
o
u
t
c
o
m
e
:
 
I
n
t
e
r
v
i
e
w
O
u
t
c
o
m
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
 
I
n
t
e
r
v
i
e
w
T
o
p
Q
u
e
s
t
i
o
n
 
{


 
 
p
r
o
m
p
t
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


 
 
t
o
p
i
c
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
d
i
f
f
i
c
u
l
t
y
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
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
 
I
n
t
e
r
v
i
e
w
L
i
s
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
s
:
 
I
n
t
e
r
v
i
e
w
E
x
p
e
r
i
e
n
c
e
[
]
;


 
 
p
a
g
i
n
a
t
i
o
n
:
 
{


 
 
 
 
p
a
g
e
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


 
 
 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
 
 
t
o
t
a
l
P
a
g
e
s
:
 
n
u
m
b
e
r
;


 
 
}
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
 
I
n
t
e
r
v
i
e
w
C
o
m
p
a
n
y
L
i
s
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


 
 
c
o
m
p
a
n
i
e
s
:
 
I
n
t
e
r
v
i
e
w
C
o
m
p
a
n
y
L
i
s
t
I
t
e
m
[
]
;


 
 
p
a
g
i
n
a
t
i
o
n
:
 
{


 
 
 
 
p
a
g
e
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


 
 
 
 
t
o
t
a
l
:
 
n
u
m
b
e
r
;


 
 
 
 
t
o
t
a
l
P
a
g
e
s
:
 
n
u
m
b
e
r
;


 
 
}
;


}




/
/
 
M
o
c
k
 
I
n
t
e
r
v
i
e
w


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
 
M
o
c
k
I
n
t
e
r
v
i
e
w
T
r
a
n
s
c
r
i
p
t
E
n
t
r
y
 
{


 
 
q
u
e
s
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


 
 
a
n
s
w
e
r
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
 
M
o
c
k
I
n
t
e
r
v
i
e
w
F
e
e
d
b
a
c
k
 
{


 
 
c
o
m
m
u
n
i
c
a
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


 
 
t
e
c
h
n
i
c
a
l
A
c
c
u
r
a
c
y
:
 
s
t
r
i
n
g
;


 
 
a
r
e
a
s
T
o
I
m
p
r
o
v
e
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


 
 
s
t
r
e
n
g
t
h
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


 
 
o
v
e
r
a
l
l
R
a
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
 
M
o
c
k
I
n
t
e
r
v
i
e
w
F
e
e
d
b
a
c
k
R
e
s
p
o
n
s
e
 
{


 
 
f
e
e
d
b
a
c
k
:
 
M
o
c
k
I
n
t
e
r
v
i
e
w
F
e
e
d
b
a
c
k
;


 
 
f
a
l
l
b
a
c
k
U
s
e
d
:
 
b
o
o
l
e
a
n
;


}


