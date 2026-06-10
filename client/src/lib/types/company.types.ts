
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
m
p
a
n
y
S
i
z
e
 
=
 
"
S
T
A
R
T
U
P
"
 
|
 
"
S
M
A
L
L
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
L
A
R
G
E
"
 
|
 
"
E
N
T
E
R
P
R
I
S
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
 
R
e
v
i
e
w
S
t
a
t
u
s
 
=
 
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
n
t
r
i
b
u
t
i
o
n
S
t
a
t
u
s
 
=
 
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
n
t
r
i
b
u
t
i
o
n
T
y
p
e
 
=
 
"
N
E
W
_
C
O
M
P
A
N
Y
"
 
|
 
"
E
D
I
T
_
C
O
M
P
A
N
Y
"
 
|
 
"
A
D
D
_
C
O
N
T
A
C
T
"
 
|
 
"
A
D
D
_
R
E
V
I
E
W
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


 
 
m
i
s
s
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


 
 
s
i
z
e
:
 
C
o
m
p
a
n
y
S
i
z
e
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


 
 
s
t
a
t
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


 
 
a
d
d
r
e
s
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


 
 
o
f
f
i
c
e
L
o
c
a
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


 
 
w
e
b
s
i
t
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


 
 
s
o
c
i
a
l
L
i
n
k
s
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
 
s
t
r
i
n
g
>
;


 
 
t
e
c
h
n
o
l
o
g
i
e
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


 
 
h
i
r
i
n
g
S
t
a
t
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


 
 
f
o
u
n
d
e
d
Y
e
a
r
?
:
 
n
u
m
b
e
r
;


 
 
p
h
o
t
o
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


 
 
i
s
A
p
p
r
o
v
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
n
t
a
c
t
s
?
:
 
C
o
m
p
a
n
y
C
o
n
t
a
c
t
[
]
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
 
r
e
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
 
C
o
m
p
a
n
y
R
e
v
i
e
w
 
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


 
 
p
r
o
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


 
 
c
o
n
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


 
 
i
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
?
:
 
s
t
r
i
n
g
;


 
 
w
o
r
k
C
u
l
t
u
r
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


 
 
s
a
l
a
r
y
I
n
s
i
g
h
t
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


 
 
s
t
a
t
u
s
:
 
R
e
v
i
e
w
S
t
a
t
u
s
;


 
 
u
s
e
r
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
?
:
 
s
t
r
i
n
g
 
}
;


 
 
c
o
m
p
a
n
y
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
 
C
o
m
p
a
n
y
C
o
n
t
a
c
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


 
 
d
e
s
i
g
n
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


 
 
e
m
a
i
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


 
 
p
h
o
n
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


 
 
l
i
n
k
e
d
i
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


 
 
i
s
P
u
b
l
i
c
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
 
C
o
m
p
a
n
y
C
o
n
t
r
i
b
u
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


 
 
t
y
p
e
:
 
C
o
n
t
r
i
b
u
t
i
o
n
T
y
p
e
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
?
:
 
n
u
m
b
e
r
;


 
 
d
a
t
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


 
 
s
t
a
t
u
s
:
 
C
o
n
t
r
i
b
u
t
i
o
n
S
t
a
t
u
s
;


 
 
a
d
m
i
n
N
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


 
 
u
s
e
r
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
 
e
m
a
i
l
:
 
s
t
r
i
n
g
 
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
 
C
i
t
y
C
o
u
n
t
 
{


 
 
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


}




/
/
 
Y
C
 
C
o
m
p
a
n
i
e
s


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
 
Y
C
F
o
u
n
d
e
r
 
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


 
 
b
i
o
?
:
 
s
t
r
i
n
g
;


 
 
i
m
a
g
e
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


 
 
l
i
n
k
e
d
i
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


 
 
t
w
i
t
t
e
r
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
 
Y
C
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


 
 
y
c
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


 
 
o
n
e
L
i
n
e
r
?
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
n
g
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


 
 
b
a
t
c
h
?
:
 
s
t
r
i
n
g
;


 
 
b
a
t
c
h
S
h
o
r
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


 
 
s
t
a
t
u
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


 
 
w
e
b
s
i
t
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


 
 
s
m
a
l
l
L
o
g
o
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


 
 
a
l
l
L
o
c
a
t
i
o
n
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
e
a
m
S
i
z
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


 
 
i
n
d
u
s
t
r
y
?
:
 
s
t
r
i
n
g
;


 
 
s
u
b
i
n
d
u
s
t
r
y
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
a
g
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


 
 
i
n
d
u
s
t
r
i
e
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


 
 
r
e
g
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


 
 
s
t
a
g
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


 
 
i
s
H
i
r
i
n
g
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
o
p
C
o
m
p
a
n
y
:
 
b
o
o
l
e
a
n
;


 
 
y
c
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


 
 
l
a
u
n
c
h
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


 
 
f
o
u
n
d
e
r
s
?
:
 
Y
C
F
o
u
n
d
e
r
[
]
;


 
 
s
o
c
i
a
l
L
i
n
k
s
?
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
 
s
t
r
i
n
g
>
;


 
 
s
c
r
a
p
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
 
Y
C
S
t
a
t
s
 
{


 
 
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


 
 
b
a
t
c
h
e
s
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


 
 
i
n
d
u
s
t
r
i
e
s
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


 
 
s
t
a
t
u
s
e
s
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


