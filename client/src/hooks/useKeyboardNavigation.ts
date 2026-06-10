
i
m
p
o
r
t
 
{
 
u
s
e
E
f
f
e
c
t
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
u
s
e
N
a
v
i
g
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;




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
e
K
e
y
b
o
a
r
d
N
a
v
i
g
a
t
i
o
n
P
r
o
p
s
 
{


 
 
p
r
e
v
P
a
t
h
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


 
 
n
e
x
t
P
a
t
h
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
 
f
u
n
c
t
i
o
n
 
u
s
e
K
e
y
b
o
a
r
d
N
a
v
i
g
a
t
i
o
n
(
{
 
p
r
e
v
P
a
t
h
,
 
n
e
x
t
P
a
t
h
 
}
:
 
U
s
e
K
e
y
b
o
a
r
d
N
a
v
i
g
a
t
i
o
n
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
K
e
y
D
o
w
n
 
=
 
(
e
:
 
K
e
y
b
o
a
r
d
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
e
.
t
a
r
g
e
t
 
a
s
 
H
T
M
L
E
l
e
m
e
n
t
;


 
 
 
 
 
 


 
 
 
 
 
 
/
/
 
I
g
n
o
r
e
 
i
f
 
t
y
p
i
n
g
 
i
n
 
i
n
p
u
t
 
O
R
 
i
f
 
a
 
m
o
d
i
f
i
e
r
 
k
e
y
 
(
C
t
r
l
/
A
l
t
/
M
e
t
a
/
S
h
i
f
t
)
 
i
s
 
h
e
l
d
 
d
o
w
n


 
 
 
 
 
 
i
f
 
(


 
 
 
 
 
 
 
 
t
a
r
g
e
t
.
t
a
g
N
a
m
e
 
=
=
=
 
"
I
N
P
U
T
"
 
|
|


 
 
 
 
 
 
 
 
t
a
r
g
e
t
.
t
a
g
N
a
m
e
 
=
=
=
 
"
T
E
X
T
A
R
E
A
"
 
|
|


 
 
 
 
 
 
 
 
t
a
r
g
e
t
.
i
s
C
o
n
t
e
n
t
E
d
i
t
a
b
l
e
 
|
|


 
 
 
 
 
 
 
 
e
.
c
t
r
l
K
e
y
 
|
|


 
 
 
 
 
 
 
 
e
.
a
l
t
K
e
y
 
|
|


 
 
 
 
 
 
 
 
e
.
m
e
t
a
K
e
y
 
|
|


 
 
 
 
 
 
 
 
e
.
s
h
i
f
t
K
e
y


 
 
 
 
 
 
)
 
{


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
A
r
r
o
w
R
i
g
h
t
"
 
|
|
 
e
.
k
e
y
.
t
o
L
o
w
e
r
C
a
s
e
(
)
 
=
=
=
 
"
l
"
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
n
e
x
t
P
a
t
h
)
 
n
a
v
i
g
a
t
e
(
n
e
x
t
P
a
t
h
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
A
r
r
o
w
L
e
f
t
"
 
|
|
 
e
.
k
e
y
.
t
o
L
o
w
e
r
C
a
s
e
(
)
 
=
=
=
 
"
h
"
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
p
r
e
v
P
a
t
h
)
 
n
a
v
i
g
a
t
e
(
p
r
e
v
P
a
t
h
)
;


 
 
 
 
 
 
}


 
 
 
 
}
;




 
 
 
 
w
i
n
d
o
w
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
k
e
y
d
o
w
n
"
,
 
h
a
n
d
l
e
K
e
y
D
o
w
n
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
w
i
n
d
o
w
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
k
e
y
d
o
w
n
"
,
 
h
a
n
d
l
e
K
e
y
D
o
w
n
)
;


 
 
}
,
 
[
n
a
v
i
g
a
t
e
,
 
p
r
e
v
P
a
t
h
,
 
n
e
x
t
P
a
t
h
]
)
;


}
