
/
/
 
S
k
i
l
l
 
Q
u
i
z


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
 
Q
u
i
z
 
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


 
 
p
a
s
s
T
h
r
e
s
h
o
l
d
:
 
n
u
m
b
e
r
;


 
 
t
i
m
e
L
i
m
i
t
S
e
c
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
 
Q
u
i
z
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
 
Q
u
i
z
Q
u
e
s
t
i
o
n
 
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


 
 
o
p
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


 
 
c
o
r
r
e
c
t
I
n
d
e
x
?
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
l
a
n
a
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
 
Q
u
i
z
A
t
t
e
m
p
t
 
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


 
 
p
a
s
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


 
 
q
u
i
z
:
 
{
 
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
 
s
k
i
l
l
:
 
{
 
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
 
}
 
}
;


}




/
/
 
S
k
i
l
l
 
V
e
r
i
f
i
c
a
t
i
o
n


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
 
T
e
s
t
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
B
E
G
I
N
N
E
R
"
 
|
 
"
I
N
T
E
R
M
E
D
I
A
T
E
"
 
|
 
"
A
D
V
A
N
C
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
 
i
n
t
e
r
f
a
c
e
 
S
k
i
l
l
T
e
s
t
 
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
k
i
l
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


 
 
d
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
 
T
e
s
t
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


 
 
t
i
m
e
L
i
m
i
t
S
e
c
s
:
 
n
u
m
b
e
r
;


 
 
p
a
s
s
T
h
r
e
s
h
o
l
d
:
 
n
u
m
b
e
r
;


 
 
i
s
A
c
t
i
v
e
:
 
b
o
o
l
e
a
n
;


 
 
_
c
o
u
n
t
?
:
 
{
 
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
 
n
u
m
b
e
r
;
 
a
t
t
e
m
p
t
s
:
 
n
u
m
b
e
r
 
}
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
 
S
k
i
l
l
T
e
s
t
Q
u
e
s
t
i
o
n
 
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


 
 
o
p
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


 
 
c
o
r
r
e
c
t
I
n
d
e
x
?
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
l
a
n
a
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
r
d
e
r
I
n
d
e
x
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
 
V
e
r
i
f
i
e
d
S
k
i
l
l
 
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
k
i
l
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


 
 
s
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


 
 
v
e
r
i
f
i
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
 
S
k
i
l
l
T
e
s
t
W
i
t
h
Q
u
e
s
t
i
o
n
s
 
e
x
t
e
n
d
s
 
S
k
i
l
l
T
e
s
t
 
{


 
 
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
 
S
k
i
l
l
T
e
s
t
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


 
 
e
x
i
s
t
i
n
g
V
e
r
i
f
i
c
a
t
i
o
n
?
:
 
V
e
r
i
f
i
e
d
S
k
i
l
l
 
|
 
n
u
l
l
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
P
e
r
S
e
s
s
i
o
n
?
:
 
n
u
m
b
e
r
;


 
 
b
e
s
t
A
t
t
e
m
p
t
?
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


 
 
 
 
s
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


 
 
 
 
p
a
s
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
 
P
r
o
c
t
o
r
L
o
g
 
{


 
 
t
a
b
S
w
i
t
c
h
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


 
 
f
o
c
u
s
L
o
s
s
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


 
 
f
u
l
l
s
c
r
e
e
n
E
x
i
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


 
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
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


 
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
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


 
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
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


 
 
f
a
c
e
V
i
o
l
a
t
i
o
n
s
:
 
{
 
t
y
p
e
:
 
"
N
O
_
F
A
C
E
"
 
|
 
"
M
U
L
T
I
P
L
E
_
F
A
C
E
S
"
;
 
t
i
m
e
s
t
a
m
p
:
 
s
t
r
i
n
g
;
 
d
u
r
a
t
i
o
n
?
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


 
 
w
a
r
n
i
n
g
s
:
 
{
 
t
y
p
e
:
 
s
t
r
i
n
g
;
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;
 
t
i
m
e
s
t
a
m
p
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
t
e
r
m
i
n
a
t
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


 
 
t
e
r
m
i
n
a
t
i
o
n
R
e
a
s
o
n
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
a
m
e
r
a
E
n
a
b
l
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


 
 
s
n
a
p
s
h
o
t
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
 
S
k
i
l
l
T
e
s
t
A
t
t
e
m
p
t
 
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


 
 
t
e
s
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


 
 
s
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


 
 
p
a
s
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


 
 
p
r
o
c
t
o
r
L
o
g
?
:
 
P
r
o
c
t
o
r
L
o
g
;


 
 
p
r
o
c
t
o
r
i
n
g
S
c
o
r
e
?
:
 
n
u
m
b
e
r
;


 
 
a
u
t
o
T
e
r
m
i
n
a
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


 
 
s
t
a
r
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
l
e
t
e
d
A
t
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
e
s
t
:
 
{
 
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
 
s
k
i
l
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
 
G
r
a
d
e
d
A
n
s
w
e
r
 
{


 
 
q
u
e
s
t
i
o
n
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


 
 
s
e
l
e
c
t
e
d
I
n
d
e
x
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
r
r
e
c
t
:
 
b
o
o
l
e
a
n
;


 
 
e
x
p
l
a
n
a
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
 
S
k
i
l
l
T
e
s
t
S
u
b
m
i
t
R
e
s
u
l
t
 
{


 
 
a
t
t
e
m
p
t
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
 
s
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
 
p
a
s
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
 
}
;


 
 
s
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


 
 
p
a
s
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


 
 
c
o
r
r
e
c
t
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


 
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
:
 
n
u
m
b
e
r
;


 
 
g
r
a
d
e
d
A
n
s
w
e
r
s
:
 
G
r
a
d
e
d
A
n
s
w
e
r
[
]
;


}




/
/
 
B
a
d
g
e
s


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
 
B
a
d
g
e
C
a
t
e
g
o
r
y
 
=
 
"
C
A
R
E
E
R
"
 
|
 
"
Q
U
I
Z
"
 
|
 
"
S
K
I
L
L
"
 
|
 
"
C
O
N
T
R
I
B
U
T
I
O
N
"
 
|
 
"
M
I
L
E
S
T
O
N
E
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
 
B
a
d
g
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


 
 
d
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


 
 
i
c
o
n
U
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


 
 
c
a
t
e
g
o
r
y
:
 
B
a
d
g
e
C
a
t
e
g
o
r
y
;


 
 
c
r
i
t
e
r
i
a
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
u
n
k
n
o
w
n
>
;


 
 
i
s
A
c
t
i
v
e
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
 
S
t
u
d
e
n
t
B
a
d
g
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


 
 
b
a
d
g
e
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


 
 
b
a
d
g
e
:
 
B
a
d
g
e
;


 
 
e
a
r
n
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


