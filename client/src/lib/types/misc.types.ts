
/
/
 
P
a
g
i
n
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
a
g
i
n
a
t
i
o
n
 
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




/
/
 
─
─
 
E
m
a
i
l
 
C
a
m
p
a
i
g
n
 
─
─


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
 
E
m
a
i
l
C
a
m
p
a
i
g
n
S
t
a
t
u
s
 
=
 
"
D
R
A
F
T
"
 
|
 
"
Q
U
E
U
E
D
"
 
|
 
"
S
E
N
D
I
N
G
"
 
|
 
"
P
A
U
S
E
D
"
 
|
 
"
C
O
M
P
L
E
T
E
D
"
 
|
 
"
F
A
I
L
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
 
E
m
a
i
l
L
o
g
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
S
E
N
T
"
 
|
 
"
F
A
I
L
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
 
E
m
a
i
l
C
a
m
p
a
i
g
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
n
t
a
c
t
T
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


 
 
s
t
a
t
u
s
:
 
E
m
a
i
l
C
a
m
p
a
i
g
n
S
t
a
t
u
s
;


 
 
t
o
t
a
l
E
m
a
i
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


 
 
s
e
n
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


 
 
f
a
i
l
e
d
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
n
t
e
r
v
a
l
S
e
c
o
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
l
e
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
 
|
 
n
u
l
l
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
 
E
m
a
i
l
L
o
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


 
 
r
e
c
i
p
i
e
n
t
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


 
 
r
e
c
i
p
i
e
n
t
E
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
;


 
 
s
u
b
j
e
c
t
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
 
E
m
a
i
l
L
o
g
S
t
a
t
u
s
;


 
 
s
e
n
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
 
|
 
n
u
l
l
;


 
 
e
r
r
o
r
M
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
 
E
m
a
i
l
C
a
m
p
a
i
g
n
D
e
t
a
i
l
 
e
x
t
e
n
d
s
 
E
m
a
i
l
C
a
m
p
a
i
g
n
 
{


 
 
c
h
a
t
H
i
s
t
o
r
y
:
 
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
 
}
[
]
;


 
 
e
m
a
i
l
S
u
b
j
e
c
t
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


 
 
e
m
a
i
l
T
e
m
p
l
a
t
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


 
 
f
i
l
t
e
r
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


 
 
e
m
a
i
l
L
o
g
s
:
 
E
m
a
i
l
L
o
g
[
]
;


}




/
/
 
─
─
 
B
l
o
g
 
─
─


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
l
o
g
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
_
A
D
V
I
C
E
"
 
|
 
"
I
N
T
E
R
V
I
E
W
_
T
I
P
S
"
 
|
 
"
S
A
L
A
R
Y
_
G
U
I
D
E
"
 
|
 
"
I
N
D
U
S
T
R
Y
_
I
N
S
I
G
H
T
S
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
T
I
P
S
"
 
|
 
"
T
E
C
H
_
T
R
E
N
D
S
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
 
B
l
o
g
S
t
a
t
u
s
 
=
 
"
D
R
A
F
T
"
 
|
 
"
P
U
B
L
I
S
H
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
 
B
l
o
g
P
o
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


 
 
e
x
c
e
r
p
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
l
o
g
C
a
t
e
g
o
r
y
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


 
 
a
u
t
h
o
r
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


 
 
s
t
a
t
u
s
:
 
B
l
o
g
S
t
a
t
u
s
;


 
 
f
e
a
t
u
r
e
d
I
m
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


 
 
r
e
a
d
i
n
g
T
i
m
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
F
e
a
t
u
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


 
 
p
u
b
l
i
s
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


 
 
b
o
o
k
m
a
r
k
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


 
 
l
i
k
e
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


 
 
r
e
l
a
t
e
d
P
o
s
t
s
?
:
 
B
l
o
g
P
o
s
t
[
]
;


}




/
/
 
─
─
 
I
n
t
e
r
n
H
a
c
k
 
A
I
 
/
 
J
o
b
 
A
g
e
n
t
 
─
─


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
 
J
o
b
F
e
e
d
M
a
t
c
h
 
{


 
 
m
a
t
c
h
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


 
 
s
k
i
l
l
M
a
t
c
h
:
 
n
u
m
b
e
r
;


 
 
l
o
c
a
t
i
o
n
M
a
t
c
h
:
 
n
u
m
b
e
r
;


 
 
s
a
l
a
r
y
M
a
t
c
h
:
 
n
u
m
b
e
r
;


 
 
s
a
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


 
 
s
e
e
n
:
 
b
o
o
l
e
a
n
;


 
 
j
o
b
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
m
p
a
n
y
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


 
 
 
 
s
a
l
a
r
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


 
 
 
 
s
k
i
l
l
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
o
r
k
M
o
d
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
L
e
v
e
l
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


 
 
 
 
a
p
p
l
i
c
a
t
i
o
n
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
 
|
 
n
u
l
l
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
 
J
o
b
P
r
e
f
e
r
e
n
c
e
s
 
{


 
 
d
e
s
i
r
e
d
R
o
l
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


 
 
d
e
s
i
r
e
d
S
k
i
l
l
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


 
 
d
e
s
i
r
e
d
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


 
 
m
i
n
S
a
l
a
r
y
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


 
 
w
o
r
k
M
o
d
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
L
e
v
e
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


 
 
d
o
m
a
i
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
 
J
o
b
A
g
e
n
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
?
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


 
 
j
o
b
C
o
u
n
t
?
:
 
n
u
m
b
e
r
;


 
 
j
o
b
I
d
s
?
:
 
n
u
m
b
e
r
[
]
;


 
 
j
o
b
s
?
:
 
J
o
b
F
e
e
d
M
a
t
c
h
[
"
j
o
b
"
]
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
 
J
o
b
A
g
e
n
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


 
 
j
o
b
s
:
 
J
o
b
F
e
e
d
M
a
t
c
h
[
"
j
o
b
"
]
[
]
;


 
 
p
r
e
f
e
r
e
n
c
e
s
U
p
d
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
 
J
o
b
F
e
e
d
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


 
 
u
n
s
e
e
n
:
 
n
u
m
b
e
r
;


 
 
s
a
v
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


}




/
/
 
─
─
 
F
u
n
d
i
n
g
 
S
i
g
n
a
l
s
 
─
─


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
 
F
u
n
d
i
n
g
S
i
g
n
a
l
S
t
a
t
u
s
 
=
 
"
A
C
T
I
V
E
"
 
|
 
"
S
T
A
L
E
"
 
|
 
"
A
R
C
H
I
V
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
 
F
u
n
d
i
n
g
S
i
g
n
a
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
;


 
 
c
o
m
p
a
n
y
W
e
b
s
i
t
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


 
 
l
o
g
o
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
 
|
 
n
u
l
l
;


 
 
f
u
n
d
i
n
g
R
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
 
|
 
n
u
l
l
;


 
 
f
u
n
d
i
n
g
A
m
o
u
n
t
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


 
 
a
m
o
u
n
t
U
s
d
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


 
 
a
n
n
o
u
n
c
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


 
 
h
q
L
o
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
 
|
 
n
u
l
l
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
 
|
 
n
u
l
l
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


 
 
s
o
u
r
c
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
o
u
r
c
e
I
d
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
v
e
s
t
o
r
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


 
 
c
a
r
e
e
r
s
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
 
|
 
n
u
l
l
;


 
 
h
i
r
i
n
g
S
i
g
n
a
l
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
 
F
u
n
d
i
n
g
S
i
g
n
a
l
S
t
a
t
u
s
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
s
t
S
e
e
n
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
 
F
u
n
d
i
n
g
S
i
g
n
a
l
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


 
 
s
i
g
n
a
l
s
:
 
F
u
n
d
i
n
g
S
i
g
n
a
l
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
 
F
u
n
d
i
n
g
S
i
g
n
a
l
S
o
u
r
c
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


}


