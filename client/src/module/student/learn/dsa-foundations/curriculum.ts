
i
m
p
o
r
t
 
t
y
p
e
 
{
 
C
o
m
p
o
n
e
n
t
T
y
p
e
,
 
L
a
z
y
E
x
o
t
i
c
C
o
m
p
o
n
e
n
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
 
l
a
z
y
 
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
e
s
s
o
n
E
n
t
r
y
 
{


 
 
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
u
m
m
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
;


 
 
/
*
*
 
L
a
z
y
-
l
o
a
d
e
d
 
l
e
s
s
o
n
 
c
o
m
p
o
n
e
n
t
.
 
*
/


 
 
l
o
a
d
:
 
L
a
z
y
E
x
o
t
i
c
C
o
m
p
o
n
e
n
t
<
C
o
m
p
o
n
e
n
t
T
y
p
e
<
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
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
)
 
=
>
 
v
o
i
d
 
}
>
>
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
e
v
e
l
E
n
t
r
y
 
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
u
m
b
e
r
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
u
m
m
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
;


 
 
/
*
*
 
T
o
p
i
c
s
 
c
o
v
e
r
e
d
 
i
n
 
t
h
i
s
 
l
e
v
e
l
,
 
s
h
o
w
n
 
a
s
 
m
o
n
o
 
l
a
b
e
l
s
 
o
n
 
t
h
e
 
l
e
v
e
l
 
c
a
r
d
.
 
*
/


 
 
t
o
p
i
c
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


 
 
l
e
s
s
o
n
s
:
 
L
e
s
s
o
n
E
n
t
r
y
[
]
;


}




/
*
*


 
*
 
T
h
e
 
c
u
r
r
i
c
u
l
u
m
 
i
s
 
i
n
t
e
n
t
i
o
n
a
l
l
y
 
a
p
p
e
n
d
-
o
n
l
y
:
 
a
d
d
 
n
e
w
 
l
e
v
e
l
s
 
a
s
 
y
o
u
 
a
u
t
h
o
r
 
l
e
s
s
o
n
s
.


 
*
 
E
a
c
h
 
l
e
s
s
o
n
 
u
s
e
s
 
a
 
l
a
z
y
 
i
m
p
o
r
t
 
s
o
 
t
h
e
 
b
u
n
d
l
e
 
s
t
a
y
s
 
s
m
a
l
l
.


 
*
/


e
x
p
o
r
t
 
c
o
n
s
t
 
L
E
V
E
L
S
:
 
L
e
v
e
l
E
n
t
r
y
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
0
"
,


 
 
 
 
n
u
m
b
e
r
:
 
0
,


 
 
 
 
t
i
t
l
e
:
 
"
P
r
o
g
r
a
m
m
i
n
g
 
P
r
e
r
e
q
u
i
s
i
t
e
s
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
S
t
a
r
t
 
h
e
r
e
 
i
f
 
y
o
u
'
v
e
 
n
e
v
e
r
 
t
h
o
u
g
h
t
 
f
o
r
m
a
l
l
y
 
a
b
o
u
t
 
a
l
g
o
r
i
t
h
m
s
.
 
P
s
e
u
d
o
c
o
d
e
 
n
o
t
a
t
i
o
n
,
 
t
h
e
 
c
a
l
l
 
s
t
a
c
k
,
 
a
n
d
 
h
o
w
 
t
o
 
r
e
a
d
 
a
 
p
r
o
b
l
e
m
 
b
e
f
o
r
e
 
y
o
u
 
c
o
d
e
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
a
l
g
o
r
i
t
h
m
"
,
 
"
p
s
e
u
d
o
c
o
d
e
"
,
 
"
v
a
r
i
a
b
l
e
s
"
,
 
"
l
o
o
p
s
"
,
 
"
f
u
n
c
t
i
o
n
s
"
,
 
"
e
d
g
e
-
c
a
s
e
s
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
w
h
a
t
-
i
s
-
a
n
-
a
l
g
o
r
i
t
h
m
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
W
h
a
t
 
I
s
 
a
n
 
A
l
g
o
r
i
t
h
m
?
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
A
 
f
i
n
i
t
e
,
 
d
e
t
e
r
m
i
n
i
s
t
i
c
 
s
e
q
u
e
n
c
e
 
o
f
 
s
t
e
p
s
 
t
h
a
t
 
t
a
k
e
s
 
i
n
p
u
t
 
a
n
d
 
p
r
o
d
u
c
e
s
 
o
u
t
p
u
t
,
 
i
l
l
u
s
t
r
a
t
e
d
 
w
i
t
h
 
e
v
e
r
y
d
a
y
 
r
e
c
i
p
e
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
0
_
W
h
a
t
I
s
A
n
A
l
g
o
r
i
t
h
m
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
r
e
a
d
i
n
g
-
p
s
e
u
d
o
c
o
d
e
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
R
e
a
d
i
n
g
 
P
s
e
u
d
o
c
o
d
e
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
N
o
t
a
t
i
o
n
 
c
h
e
a
t
s
h
e
e
t
 
(
←
,
 
f
o
r
,
 
w
h
i
l
e
,
 
i
f
/
e
l
s
e
)
 
a
n
d
 
t
h
e
 
l
i
n
e
-
b
y
-
l
i
n
e
 
t
r
a
c
e
 
t
e
c
h
n
i
q
u
e
 
y
o
u
'
l
l
 
u
s
e
 
i
n
 
e
v
e
r
y
 
l
a
t
e
r
 
l
e
s
s
o
n
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
0
_
R
e
a
d
i
n
g
P
s
e
u
d
o
c
o
d
e
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
v
a
r
i
a
b
l
e
s
-
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
V
a
r
i
a
b
l
e
s
,
 
M
e
m
o
r
y
 
&
 
R
e
f
e
r
e
n
c
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
P
r
i
m
i
t
i
v
e
s
 
c
o
p
y
 
o
n
 
a
s
s
i
g
n
m
e
n
t
,
 
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
 
s
h
a
r
e
,
 
t
h
e
 
g
o
t
c
h
a
 
b
e
h
i
n
d
 
h
a
l
f
 
o
f
 
a
l
l
 
s
u
b
t
l
e
 
b
u
g
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
0
_
V
a
r
i
a
b
l
e
s
M
e
m
o
r
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
l
o
o
p
s
-
c
o
n
t
r
o
l
-
f
l
o
w
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
L
o
o
p
s
 
&
 
C
o
n
t
r
o
l
 
F
l
o
w
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
f
o
r
,
 
w
h
i
l
e
,
 
b
r
e
a
k
,
 
c
o
n
t
i
n
u
e
,
 
n
e
s
t
e
d
 
l
o
o
p
s
,
 
o
f
f
-
b
y
-
o
n
e
 
b
u
g
s
,
 
a
n
d
 
l
o
o
p
 
i
n
v
a
r
i
a
n
t
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
0
_
L
o
o
p
s
C
o
n
t
r
o
l
F
l
o
w
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
f
u
n
c
t
i
o
n
s
-
c
a
l
l
-
s
t
a
c
k
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
F
u
n
c
t
i
o
n
s
 
&
 
t
h
e
 
C
a
l
l
 
S
t
a
c
k
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
F
u
n
c
t
i
o
n
s
 
a
s
 
n
a
m
e
d
 
r
e
c
i
p
e
s
,
 
p
a
r
a
m
e
t
e
r
s
 
a
n
d
 
r
e
t
u
r
n
 
v
a
l
u
e
s
,
 
a
n
d
 
t
h
e
 
s
t
a
c
k
 
f
r
a
m
e
s
 
t
h
a
t
 
m
a
k
e
 
r
e
c
u
r
s
i
o
n
 
t
r
a
c
t
a
b
l
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
0
_
F
u
n
c
t
i
o
n
s
C
a
l
l
S
t
a
c
k
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
i
n
p
u
t
s
-
c
o
n
s
t
r
a
i
n
t
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
I
n
p
u
t
s
,
 
C
o
n
s
t
r
a
i
n
t
s
 
&
 
E
d
g
e
 
C
a
s
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
R
e
a
d
 
t
h
e
 
p
r
o
b
l
e
m
 
f
i
r
s
t
.
 
I
d
e
n
t
i
f
y
 
i
n
p
u
t
s
,
 
o
u
t
p
u
t
s
,
 
b
o
u
n
d
s
,
 
a
n
d
 
t
h
e
 
e
d
g
e
 
c
a
s
e
s
 
t
h
a
t
 
b
r
e
a
k
 
n
a
i
v
e
 
c
o
d
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
0
_
I
n
p
u
t
s
C
o
n
s
t
r
a
i
n
t
s
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
1
"
,


 
 
 
 
n
u
m
b
e
r
:
 
1
,


 
 
 
 
t
i
t
l
e
:
 
"
F
o
u
n
d
a
t
i
o
n
s
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
H
o
w
 
a
l
g
o
r
i
t
h
m
s
 
g
r
o
w
,
 
h
o
w
 
t
o
 
t
r
a
c
e
 
t
h
e
m
,
 
a
n
d
 
t
h
e
 
a
r
r
a
y
-
a
n
d
-
s
t
r
i
n
g
 
t
o
o
l
k
i
t
 
e
v
e
r
y
 
i
n
t
e
r
v
i
e
w
 
l
e
a
n
s
 
o
n
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
c
o
m
p
l
e
x
i
t
y
"
,
 
"
t
r
a
c
i
n
g
"
,
 
"
a
r
r
a
y
s
"
,
 
"
s
t
r
i
n
g
s
"
,
 
"
t
w
o
-
p
o
i
n
t
e
r
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
i
g
-
o
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
i
m
e
 
C
o
m
p
l
e
x
i
t
y
 
&
 
B
i
g
-
O
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
P
l
o
t
 
g
r
o
w
t
h
 
c
u
r
v
e
s
,
 
c
l
a
s
s
i
f
y
 
l
o
o
p
s
 
b
y
 
B
i
g
-
O
,
 
a
n
d
 
l
e
a
r
n
 
t
h
e
 
r
u
l
e
s
 
t
h
a
t
 
m
a
k
e
 
c
o
m
p
l
e
x
i
t
y
 
a
n
a
l
y
s
i
s
 
f
a
s
t
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
1
_
B
i
g
O
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
a
l
g
o
r
i
t
h
m
-
t
r
a
c
e
r
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
A
l
g
o
r
i
t
h
m
 
T
r
a
c
e
r
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
S
t
e
p
 
t
h
r
o
u
g
h
 
p
s
e
u
d
o
c
o
d
e
 
l
i
n
e
 
b
y
 
l
i
n
e
,
 
w
a
t
c
h
 
s
t
a
t
e
 
e
v
o
l
v
e
,
 
a
n
d
 
b
u
i
l
d
 
i
n
t
u
i
t
i
o
n
 
f
o
r
 
t
r
a
c
i
n
g
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
1
_
A
l
g
o
r
i
t
h
m
T
r
a
c
e
r
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
s
p
a
c
e
-
c
o
m
p
l
e
x
i
t
y
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
p
a
c
e
 
C
o
m
p
l
e
x
i
t
y
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
A
u
x
i
l
i
a
r
y
 
m
e
m
o
r
y
 
v
s
 
t
o
t
a
l
 
m
e
m
o
r
y
,
 
t
h
e
 
c
a
l
l
 
s
t
a
c
k
,
 
a
n
d
 
h
o
w
 
r
e
c
u
r
s
i
o
n
 
h
i
d
e
s
 
O
(
n
)
 
c
o
s
t
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
1
_
S
p
a
c
e
C
o
m
p
l
e
x
i
t
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
a
r
r
a
y
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
A
r
r
a
y
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
I
n
d
e
x
 
m
a
t
h
,
 
i
n
-
p
l
a
c
e
 
u
p
d
a
t
e
s
,
 
a
n
d
 
t
h
e
 
a
r
r
a
y
 
o
p
e
r
a
t
i
o
n
s
 
e
v
e
r
y
 
i
n
t
e
r
v
i
e
w
 
p
r
o
b
l
e
m
 
a
s
s
u
m
e
s
 
y
o
u
 
k
n
o
w
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
1
_
A
r
r
a
y
s
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
s
t
r
i
n
g
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
t
r
i
n
g
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
C
h
a
r
a
c
t
e
r
-
l
e
v
e
l
 
p
a
t
t
e
r
n
s
,
 
i
m
m
u
t
a
b
i
l
i
t
y
 
t
r
a
p
s
,
 
a
n
d
 
t
h
e
 
t
o
o
l
k
i
t
 
f
o
r
 
p
a
r
s
i
n
g
 
a
n
d
 
c
o
m
p
a
r
i
n
g
 
s
t
r
i
n
g
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
1
_
S
t
r
i
n
g
s
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
t
w
o
-
p
o
i
n
t
e
r
-
w
i
n
d
o
w
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
w
o
-
P
o
i
n
t
e
r
 
&
 
S
l
i
d
i
n
g
 
W
i
n
d
o
w
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
T
w
o
 
p
o
i
n
t
e
r
s
 
w
a
l
k
i
n
g
 
f
r
o
m
 
e
n
d
s
,
 
f
i
x
e
d
 
a
n
d
 
d
y
n
a
m
i
c
 
w
i
n
d
o
w
s
,
 
a
n
d
 
w
h
e
n
 
t
o
 
r
e
a
c
h
 
f
o
r
 
e
a
c
h
 
p
a
t
t
e
r
n
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
1
_
T
w
o
P
o
i
n
t
e
r
W
i
n
d
o
w
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
2
"
,


 
 
 
 
n
u
m
b
e
r
:
 
2
,


 
 
 
 
t
i
t
l
e
:
 
"
L
i
n
e
a
r
 
S
t
r
u
c
t
u
r
e
s
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
S
t
a
c
k
s
,
 
q
u
e
u
e
s
,
 
l
i
n
k
e
d
 
l
i
s
t
s
,
 
a
n
d
 
h
a
s
h
i
n
g
,
 
t
h
e
 
c
o
r
e
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
s
 
b
e
h
i
n
d
 
h
a
l
f
 
o
f
 
a
l
l
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
s
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
s
t
a
c
k
s
"
,
 
"
q
u
e
u
e
s
"
,
 
"
l
i
n
k
e
d
-
l
i
s
t
"
,
 
"
d
e
q
u
e
"
,
 
"
h
a
s
h
i
n
g
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
s
t
a
c
k
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
t
a
c
k
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
L
I
F
O
 
o
p
e
r
a
t
i
o
n
s
,
 
b
a
l
a
n
c
e
d
 
b
r
a
c
k
e
t
s
,
 
a
n
d
 
t
h
e
 
s
t
a
c
k
'
s
 
r
o
l
e
 
i
n
 
e
x
p
r
e
s
s
i
o
n
 
e
v
a
l
u
a
t
i
o
n
 
a
n
d
 
r
e
c
u
r
s
i
o
n
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
2
_
S
t
a
c
k
s
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
q
u
e
u
e
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
Q
u
e
u
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
F
I
F
O
 
o
p
e
r
a
t
i
o
n
s
,
 
c
i
r
c
u
l
a
r
 
b
u
f
f
e
r
s
,
 
a
n
d
 
t
h
e
 
q
u
e
u
e
'
s
 
r
o
l
e
 
i
n
 
B
F
S
 
a
n
d
 
s
c
h
e
d
u
l
i
n
g
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
2
_
Q
u
e
u
e
s
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
s
i
n
g
l
y
-
l
i
n
k
e
d
-
l
i
s
t
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
i
n
g
l
y
 
L
i
n
k
e
d
 
L
i
s
t
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
P
o
i
n
t
e
r
 
m
e
c
h
a
n
i
c
s
,
 
c
y
c
l
e
 
d
e
t
e
c
t
i
o
n
,
 
r
e
v
e
r
s
a
l
 
i
n
 
p
l
a
c
e
,
 
a
n
d
 
t
h
e
 
t
r
a
d
e
-
o
f
f
 
v
s
 
a
r
r
a
y
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
2
_
S
i
n
g
l
y
L
i
n
k
e
d
L
i
s
t
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
o
u
b
l
y
-
c
i
r
c
u
l
a
r
-
l
i
s
t
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
o
u
b
l
y
 
&
 
C
i
r
c
u
l
a
r
 
L
i
n
k
e
d
 
L
i
s
t
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
B
a
c
k
w
a
r
d
s
 
t
r
a
v
e
r
s
a
l
,
 
c
i
r
c
u
l
a
r
 
s
e
n
t
i
n
e
l
s
,
 
a
n
d
 
w
h
e
n
 
t
h
e
 
e
x
t
r
a
 
p
o
i
n
t
e
r
 
e
a
r
n
s
 
i
t
s
 
w
e
i
g
h
t
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
2
_
D
o
u
b
l
y
C
i
r
c
u
l
a
r
L
i
s
t
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
e
q
u
e
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
e
q
u
e
s
 
&
 
S
p
e
c
i
a
l
 
Q
u
e
u
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
D
o
u
b
l
e
-
e
n
d
e
d
 
q
u
e
u
e
s
,
 
m
o
n
o
t
o
n
i
c
 
q
u
e
u
e
s
,
 
a
n
d
 
p
r
i
o
r
i
t
y
 
q
u
e
u
e
s
 
a
s
 
p
r
e
v
i
e
w
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
2
_
D
e
q
u
e
S
p
e
c
i
a
l
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
h
a
s
h
i
n
g
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
H
a
s
h
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
H
a
s
h
 
f
u
n
c
t
i
o
n
s
,
 
c
o
l
l
i
s
i
o
n
 
r
e
s
o
l
u
t
i
o
n
,
 
l
o
a
d
 
f
a
c
t
o
r
,
 
a
n
d
 
t
h
e
 
O
(
1
)
-
o
n
-
a
v
e
r
a
g
e
 
p
r
o
m
i
s
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
2
_
H
a
s
h
i
n
g
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
3
"
,


 
 
 
 
n
u
m
b
e
r
:
 
3
,


 
 
 
 
t
i
t
l
e
:
 
"
T
r
e
e
s
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
F
r
o
m
 
t
r
a
v
e
r
s
a
l
s
 
t
o
 
b
a
l
a
n
c
e
d
 
t
r
e
e
s
 
a
n
d
 
t
r
i
e
s
,
 
t
h
e
 
t
r
e
e
 
t
o
o
l
k
i
t
 
t
h
a
t
 
p
o
w
e
r
s
 
i
n
d
e
x
e
s
,
 
a
u
t
o
c
o
m
p
l
e
t
e
,
 
a
n
d
 
r
a
n
g
e
 
q
u
e
r
i
e
s
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
b
i
n
a
r
y
-
t
r
e
e
"
,
 
"
b
s
t
"
,
 
"
a
v
l
"
,
 
"
r
e
d
-
b
l
a
c
k
"
,
 
"
h
e
a
p
"
,
 
"
t
r
i
e
"
,
 
"
s
e
g
m
e
n
t
-
t
r
e
e
"
,
 
"
b
+
t
r
e
e
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
i
n
a
r
y
-
t
r
e
e
-
t
r
a
v
e
r
s
a
l
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
i
n
a
r
y
 
T
r
e
e
 
T
r
a
v
e
r
s
a
l
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
I
n
-
o
r
d
e
r
,
 
p
r
e
-
o
r
d
e
r
,
 
p
o
s
t
-
o
r
d
e
r
,
 
a
n
d
 
l
e
v
e
l
-
o
r
d
e
r
,
 
r
e
c
u
r
s
i
v
e
 
a
n
d
 
i
t
e
r
a
t
i
v
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
3
_
B
i
n
a
r
y
T
r
e
e
T
r
a
v
e
r
s
a
l
s
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
s
t
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
i
n
a
r
y
 
S
e
a
r
c
h
 
T
r
e
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
I
n
s
e
r
t
,
 
s
e
a
r
c
h
,
 
d
e
l
e
t
e
,
 
a
n
d
 
t
h
e
 
i
n
v
a
r
i
a
n
t
s
 
t
h
a
t
 
k
e
e
p
 
l
o
o
k
u
p
s
 
O
(
l
o
g
 
n
)
 
o
n
 
a
v
e
r
a
g
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
3
_
B
S
T
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
a
v
l
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
A
V
L
 
T
r
e
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
H
e
i
g
h
t
-
b
a
l
a
n
c
e
d
 
B
S
T
 
w
i
t
h
 
L
L
,
 
L
R
,
 
R
L
,
 
R
R
 
r
o
t
a
t
i
o
n
s
 
t
o
 
m
a
i
n
t
a
i
n
 
t
h
e
 
b
a
l
a
n
c
e
 
f
a
c
t
o
r
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
3
_
A
V
L
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
r
e
d
-
b
l
a
c
k
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
R
e
d
-
B
l
a
c
k
 
T
r
e
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
F
i
v
e
 
i
n
v
a
r
i
a
n
t
s
,
 
c
o
l
o
r
 
f
l
i
p
s
,
 
a
n
d
 
r
o
t
a
t
i
o
n
s
 
t
h
a
t
 
b
o
u
n
d
 
h
e
i
g
h
t
 
t
o
 
2
·
l
o
g
(
n
+
1
)
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
3
_
R
e
d
B
l
a
c
k
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
h
e
a
p
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
H
e
a
p
s
 
&
 
P
r
i
o
r
i
t
y
 
Q
u
e
u
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
A
r
r
a
y
-
b
a
c
k
e
d
 
b
i
n
a
r
y
 
h
e
a
p
,
 
s
i
f
t
-
u
p
 
a
n
d
 
s
i
f
t
-
d
o
w
n
,
 
a
n
d
 
t
h
e
 
p
r
i
o
r
i
t
y
 
q
u
e
u
e
 
A
P
I
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
3
_
H
e
a
p
s
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
t
r
i
e
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
r
i
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
P
r
e
f
i
x
 
t
r
e
e
s
 
f
o
r
 
a
u
t
o
c
o
m
p
l
e
t
e
 
a
n
d
 
s
t
r
i
n
g
 
m
a
t
c
h
i
n
g
 
w
i
t
h
 
O
(
k
)
 
l
o
o
k
u
p
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
3
_
T
r
i
e
s
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
s
e
g
m
e
n
t
-
f
e
n
w
i
c
k
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
e
g
m
e
n
t
 
&
 
F
e
n
w
i
c
k
 
T
r
e
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
R
a
n
g
e
-
s
u
m
 
a
n
d
 
r
a
n
g
e
-
m
i
n
 
q
u
e
r
i
e
s
 
w
i
t
h
 
p
o
i
n
t
 
u
p
d
a
t
e
s
 
i
n
 
O
(
l
o
g
 
n
)
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
3
_
S
e
g
m
e
n
t
F
e
n
w
i
c
k
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
-
p
l
u
s
-
t
r
e
e
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
+
 
T
r
e
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
H
i
g
h
-
f
a
n
o
u
t
 
d
i
s
k
-
f
r
i
e
n
d
l
y
 
t
r
e
e
s
 
t
h
a
t
 
p
o
w
e
r
 
d
a
t
a
b
a
s
e
 
i
n
d
e
x
e
s
 
a
n
d
 
f
i
l
e
s
y
s
t
e
m
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
3
_
B
P
l
u
s
T
r
e
e
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
4
"
,


 
 
 
 
n
u
m
b
e
r
:
 
4
,


 
 
 
 
t
i
t
l
e
:
 
"
G
r
a
p
h
s
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
R
e
p
r
e
s
e
n
t
a
t
i
o
n
s
,
 
t
r
a
v
e
r
s
a
l
s
,
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
,
 
a
n
d
 
m
i
n
i
m
u
m
 
s
p
a
n
n
i
n
g
 
t
r
e
e
s
,
 
g
r
a
p
h
s
 
u
n
l
o
c
k
 
t
h
e
 
h
a
r
d
e
s
t
 
i
n
t
e
r
v
i
e
w
 
p
r
o
b
l
e
m
s
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
g
r
a
p
h
"
,
 
"
b
f
s
"
,
 
"
d
f
s
"
,
 
"
t
o
p
o
-
s
o
r
t
"
,
 
"
d
i
j
k
s
t
r
a
"
,
 
"
b
e
l
l
m
a
n
-
f
o
r
d
"
,
 
"
m
s
t
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
g
r
a
p
h
-
r
e
p
r
e
s
e
n
t
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
G
r
a
p
h
 
R
e
p
r
e
s
e
n
t
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
A
d
j
a
c
e
n
c
y
 
l
i
s
t
 
v
s
 
m
a
t
r
i
x
,
 
d
i
r
e
c
t
e
d
 
v
s
 
u
n
d
i
r
e
c
t
e
d
,
 
w
e
i
g
h
t
e
d
 
v
s
 
u
n
w
e
i
g
h
t
e
d
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
4
_
G
r
a
p
h
R
e
p
r
e
s
e
n
t
a
t
i
o
n
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
f
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
r
e
a
d
t
h
-
F
i
r
s
t
 
S
e
a
r
c
h
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
L
a
y
e
r
-
b
y
-
l
a
y
e
r
 
t
r
a
v
e
r
s
a
l
,
 
s
h
o
r
t
e
s
t
 
p
a
t
h
 
i
n
 
u
n
w
e
i
g
h
t
e
d
 
g
r
a
p
h
s
,
 
a
n
d
 
t
h
e
 
q
u
e
u
e
'
s
 
r
o
l
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
4
_
B
F
S
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
f
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
e
p
t
h
-
F
i
r
s
t
 
S
e
a
r
c
h
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
R
e
c
u
r
s
i
o
n
 
o
r
 
s
t
a
c
k
,
 
d
i
s
c
o
v
e
r
y
 
a
n
d
 
f
i
n
i
s
h
 
t
i
m
e
s
,
 
a
n
d
 
D
F
S
 
a
s
 
a
 
b
u
i
l
d
i
n
g
 
b
l
o
c
k
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
4
_
D
F
S
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
t
o
p
o
l
o
g
i
c
a
l
-
s
o
r
t
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
o
p
o
l
o
g
i
c
a
l
 
S
o
r
t
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
L
i
n
e
a
r
 
o
r
d
e
r
i
n
g
 
o
f
 
a
 
D
A
G
 
v
i
a
 
K
a
h
n
'
s
 
a
l
g
o
r
i
t
h
m
 
o
r
 
D
F
S
 
f
i
n
i
s
h
-
t
i
m
e
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
4
_
T
o
p
o
l
o
g
i
c
a
l
S
o
r
t
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
i
j
k
s
t
r
a
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
i
j
k
s
t
r
a
'
s
 
S
h
o
r
t
e
s
t
 
P
a
t
h
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
G
r
e
e
d
y
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
 
w
i
t
h
 
a
 
m
i
n
-
h
e
a
p
,
 
a
n
d
 
w
h
y
 
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
 
b
r
e
a
k
 
i
t
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
4
_
D
i
j
k
s
t
r
a
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
e
l
l
m
a
n
-
f
o
r
d
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
e
l
l
m
a
n
-
F
o
r
d
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
E
d
g
e
-
r
e
l
a
x
a
t
i
o
n
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
 
t
h
a
t
 
h
a
n
d
l
e
 
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
 
a
n
d
 
d
e
t
e
c
t
 
c
y
c
l
e
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
4
_
B
e
l
l
m
a
n
F
o
r
d
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
m
s
t
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
M
i
n
i
m
u
m
 
S
p
a
n
n
i
n
g
 
T
r
e
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
K
r
u
s
k
a
l
 
a
n
d
 
P
r
i
m
,
 
b
u
i
l
d
i
n
g
 
t
h
e
 
c
h
e
a
p
e
s
t
 
t
r
e
e
 
t
h
a
t
 
c
o
n
n
e
c
t
s
 
e
v
e
r
y
 
n
o
d
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
4
_
M
S
T
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
5
"
,


 
 
 
 
n
u
m
b
e
r
:
 
5
,


 
 
 
 
t
i
t
l
e
:
 
"
S
o
r
t
i
n
g
 
&
 
S
e
a
r
c
h
i
n
g
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
E
v
e
r
y
 
c
l
a
s
s
i
c
 
s
o
r
t
,
 
t
h
e
 
O
(
n
 
l
o
g
 
n
)
 
l
o
w
e
r
 
b
o
u
n
d
,
 
a
n
d
 
b
i
n
a
r
y
 
s
e
a
r
c
h
,
 
t
h
e
 
s
e
a
r
c
h
e
s
 
t
h
a
t
 
b
e
a
t
 
l
i
n
e
a
r
 
s
c
a
n
s
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
s
o
r
t
i
n
g
"
,
 
"
b
i
n
a
r
y
-
s
e
a
r
c
h
"
,
 
"
m
e
r
g
e
-
s
o
r
t
"
,
 
"
q
u
i
c
k
-
s
o
r
t
"
,
 
"
c
o
u
n
t
i
n
g
-
s
o
r
t
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
u
b
b
l
e
-
s
e
l
e
c
t
i
o
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
u
b
b
l
e
 
&
 
S
e
l
e
c
t
i
o
n
 
S
o
r
t
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
T
w
o
 
O
(
n
²
)
 
s
o
r
t
s
 
t
h
a
t
 
t
e
a
c
h
 
t
h
e
 
m
e
c
h
a
n
i
c
s
 
o
f
 
c
o
m
p
a
r
i
s
o
n
 
a
n
d
 
s
w
a
p
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
5
_
B
u
b
b
l
e
S
e
l
e
c
t
i
o
n
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
i
n
s
e
r
t
i
o
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
I
n
s
e
r
t
i
o
n
 
S
o
r
t
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
A
d
a
p
t
i
v
e
 
O
(
n
²
)
 
s
o
r
t
 
t
h
a
t
 
h
i
t
s
 
O
(
n
)
 
o
n
 
n
e
a
r
l
y
-
s
o
r
t
e
d
 
i
n
p
u
t
,
 
t
h
e
 
w
o
r
k
h
o
r
s
e
 
o
f
 
s
m
a
l
l
-
n
 
h
y
b
r
i
d
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
5
_
I
n
s
e
r
t
i
o
n
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
m
e
r
g
e
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
M
e
r
g
e
 
S
o
r
t
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
S
t
a
b
l
e
 
O
(
n
 
l
o
g
 
n
)
 
d
i
v
i
d
e
-
a
n
d
-
c
o
n
q
u
e
r
 
w
i
t
h
 
O
(
n
)
 
a
u
x
i
l
i
a
r
y
 
s
p
a
c
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
5
_
M
e
r
g
e
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
q
u
i
c
k
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
Q
u
i
c
k
 
S
o
r
t
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
I
n
-
p
l
a
c
e
 
a
v
e
r
a
g
e
 
O
(
n
 
l
o
g
 
n
)
 
w
i
t
h
 
p
i
v
o
t
 
s
t
r
a
t
e
g
y
,
 
p
a
r
t
i
t
i
o
n
 
m
e
c
h
a
n
i
c
s
,
 
a
n
d
 
w
o
r
s
t
-
c
a
s
e
 
t
r
a
p
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
5
_
Q
u
i
c
k
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
n
o
n
-
c
o
m
p
a
r
i
s
o
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
N
o
n
-
C
o
m
p
a
r
i
s
o
n
 
S
o
r
t
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
C
o
u
n
t
i
n
g
,
 
r
a
d
i
x
,
 
a
n
d
 
b
u
c
k
e
t
 
s
o
r
t
,
 
b
e
a
t
i
n
g
 
t
h
e
 
O
(
n
 
l
o
g
 
n
)
 
b
o
u
n
d
 
w
h
e
n
 
i
n
p
u
t
 
i
s
 
b
o
u
n
d
e
d
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
5
_
N
o
n
C
o
m
p
a
r
i
s
o
n
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
i
n
a
r
y
-
s
e
a
r
c
h
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
i
n
a
r
y
 
S
e
a
r
c
h
 
&
 
V
a
r
i
a
n
t
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
T
h
e
 
O
(
l
o
g
 
n
)
 
w
o
r
k
h
o
r
s
e
,
 
l
o
w
e
r
/
u
p
p
e
r
 
b
o
u
n
d
,
 
a
n
d
 
a
v
o
i
d
i
n
g
 
o
f
f
-
b
y
-
o
n
e
 
b
u
g
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
5
_
B
i
n
a
r
y
S
e
a
r
c
h
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
6
"
,


 
 
 
 
n
u
m
b
e
r
:
 
6
,


 
 
 
 
t
i
t
l
e
:
 
"
R
e
c
u
r
s
i
o
n
 
&
 
D
P
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
R
e
c
u
r
s
i
o
n
,
 
d
i
v
i
d
e
 
&
 
c
o
n
q
u
e
r
,
 
b
a
c
k
t
r
a
c
k
i
n
g
,
 
a
n
d
 
t
h
e
 
d
y
n
a
m
i
c
 
p
r
o
g
r
a
m
m
i
n
g
 
p
a
t
t
e
r
n
s
 
t
h
a
t
 
c
r
a
c
k
 
t
h
e
 
h
a
r
d
e
s
t
 
p
r
o
b
l
e
m
s
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
r
e
c
u
r
s
i
o
n
"
,
 
"
d
i
v
i
d
e
-
c
o
n
q
u
e
r
"
,
 
"
b
a
c
k
t
r
a
c
k
i
n
g
"
,
 
"
d
p
"
,
 
"
g
r
e
e
d
y
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
r
e
c
u
r
s
i
o
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
R
e
c
u
r
s
i
o
n
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
B
a
s
e
 
c
a
s
e
s
,
 
r
e
c
u
r
s
i
v
e
 
c
a
s
e
s
,
 
a
n
d
 
t
h
e
 
c
a
l
l
 
s
t
a
c
k
,
 
r
e
c
u
r
s
i
o
n
 
a
s
 
a
 
p
r
o
b
l
e
m
-
s
o
l
v
i
n
g
 
l
e
n
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
6
_
R
e
c
u
r
s
i
o
n
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
i
v
i
d
e
-
c
o
n
q
u
e
r
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
i
v
i
d
e
 
&
 
C
o
n
q
u
e
r
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
S
p
l
i
t
,
 
c
o
n
q
u
e
r
,
 
c
o
m
b
i
n
e
,
 
a
n
d
 
t
h
e
 
M
a
s
t
e
r
 
T
h
e
o
r
e
m
 
f
o
r
 
s
o
l
v
i
n
g
 
t
h
e
 
r
e
c
u
r
r
e
n
c
e
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
6
_
D
i
v
i
d
e
C
o
n
q
u
e
r
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
a
c
k
t
r
a
c
k
i
n
g
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
a
c
k
t
r
a
c
k
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
D
F
S
-
w
i
t
h
-
u
n
d
o
 
f
o
r
 
c
o
m
b
i
n
a
t
o
r
i
a
l
 
s
e
a
r
c
h
,
 
w
i
t
h
 
N
-
Q
u
e
e
n
s
,
 
s
u
b
s
e
t
s
,
 
a
n
d
 
p
e
r
m
u
t
a
t
i
o
n
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
6
_
B
a
c
k
t
r
a
c
k
i
n
g
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
p
-
1
d
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
y
n
a
m
i
c
 
P
r
o
g
r
a
m
m
i
n
g
 
(
1
D
)
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
M
e
m
o
i
z
a
t
i
o
n
,
 
t
a
b
u
l
a
t
i
o
n
,
 
a
n
d
 
t
h
e
 
c
a
n
o
n
i
c
a
l
 
1
D
 
p
r
o
b
l
e
m
s
:
 
F
i
b
o
n
a
c
c
i
,
 
c
l
i
m
b
i
n
g
 
s
t
a
i
r
s
,
 
h
o
u
s
e
 
r
o
b
b
e
r
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
6
_
D
P
1
D
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
p
-
2
d
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
y
n
a
m
i
c
 
P
r
o
g
r
a
m
m
i
n
g
 
(
2
D
)
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
G
r
i
d
s
 
a
n
d
 
s
t
r
i
n
g
-
p
a
i
r
 
D
P
,
 
L
C
S
,
 
e
d
i
t
 
d
i
s
t
a
n
c
e
,
 
k
n
a
p
s
a
c
k
,
 
a
n
d
 
u
n
i
q
u
e
 
p
a
t
h
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
6
_
D
P
2
D
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
g
r
e
e
d
y
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
G
r
e
e
d
y
 
A
l
g
o
r
i
t
h
m
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
L
o
c
a
l
 
c
h
o
i
c
e
s
 
t
h
a
t
 
w
o
r
k
,
 
i
n
t
e
r
v
a
l
 
s
c
h
e
d
u
l
i
n
g
,
 
H
u
f
f
m
a
n
 
c
o
d
i
n
g
,
 
a
n
d
 
t
h
e
 
e
x
c
h
a
n
g
e
 
a
r
g
u
m
e
n
t
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
6
_
G
r
e
e
d
y
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
7
"
,


 
 
 
 
n
u
m
b
e
r
:
 
7
,


 
 
 
 
t
i
t
l
e
:
 
"
A
d
v
a
n
c
e
d
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
B
i
t
 
t
r
i
c
k
s
,
 
u
n
i
o
n
-
f
i
n
d
,
 
e
x
o
t
i
c
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
s
,
 
s
t
r
i
n
g
-
m
a
t
c
h
i
n
g
 
a
l
g
o
r
i
t
h
m
s
,
 
a
n
d
 
a
d
v
a
n
c
e
d
 
g
r
a
p
h
 
t
h
e
o
r
y
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
b
i
t
-
m
a
n
i
p
u
l
a
t
i
o
n
"
,
 
"
d
s
u
"
,
 
"
s
t
r
i
n
g
-
m
a
t
c
h
i
n
g
"
,
 
"
a
d
v
a
n
c
e
d
-
g
r
a
p
h
s
"
,
 
"
m
a
x
-
f
l
o
w
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
i
t
-
m
a
n
i
p
u
l
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
i
t
 
M
a
n
i
p
u
l
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
A
N
D
,
 
O
R
,
 
X
O
R
,
 
s
h
i
f
t
s
,
 
a
n
d
 
t
h
e
 
b
i
t
 
t
r
i
c
k
s
 
t
h
a
t
 
t
u
r
n
 
O
(
n
)
 
i
n
t
o
 
O
(
1
)
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
7
_
B
i
t
M
a
n
i
p
u
l
a
t
i
o
n
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
s
u
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
i
s
j
o
i
n
t
 
S
e
t
 
U
n
i
o
n
 
(
U
n
i
o
n
-
F
i
n
d
)
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
P
a
t
h
 
c
o
m
p
r
e
s
s
i
o
n
 
a
n
d
 
u
n
i
o
n
 
b
y
 
r
a
n
k
 
f
o
r
 
n
e
a
r
l
y
-
O
(
1
)
 
c
o
n
n
e
c
t
i
v
i
t
y
 
q
u
e
r
i
e
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
7
_
D
S
U
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
a
d
v
a
n
c
e
d
-
d
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
A
d
v
a
n
c
e
d
 
D
a
t
a
 
S
t
r
u
c
t
u
r
e
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
B
-
T
r
e
e
s
,
 
R
e
d
-
B
l
a
c
k
,
 
S
k
i
p
 
L
i
s
t
s
,
 
a
n
d
 
B
l
o
o
m
 
F
i
l
t
e
r
s
,
 
w
h
e
n
 
t
h
e
 
b
a
s
i
c
s
 
a
r
e
n
'
t
 
e
n
o
u
g
h
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
7
_
A
d
v
a
n
c
e
d
D
S
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
r
a
b
i
n
-
k
a
r
p
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
R
a
b
i
n
-
K
a
r
p
 
S
t
r
i
n
g
 
M
a
t
c
h
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
R
o
l
l
i
n
g
 
h
a
s
h
 
f
o
r
 
f
a
s
t
 
s
u
b
s
t
r
i
n
g
 
s
e
a
r
c
h
 
w
i
t
h
 
a
v
e
r
a
g
e
 
O
(
n
 
+
 
m
)
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
7
_
R
a
b
i
n
K
a
r
p
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
k
m
p
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
K
M
P
 
S
t
r
i
n
g
 
M
a
t
c
h
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
T
h
e
 
l
o
n
g
e
s
t
-
p
r
o
p
e
r
-
p
r
e
f
i
x
-
s
u
f
f
i
x
 
t
a
b
l
e
 
t
h
a
t
 
m
a
k
e
s
 
p
a
t
t
e
r
n
 
m
a
t
c
h
i
n
g
 
O
(
n
 
+
 
m
)
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
7
_
K
M
P
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
z
-
m
a
n
a
c
h
e
r
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
Z
-
F
u
n
c
t
i
o
n
 
&
 
M
a
n
a
c
h
e
r
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
Z
-
a
r
r
a
y
 
f
o
r
 
p
r
e
f
i
x
 
m
a
t
c
h
i
n
g
 
a
n
d
 
M
a
n
a
c
h
e
r
 
f
o
r
 
a
l
l
 
p
a
l
i
n
d
r
o
m
e
s
 
i
n
 
O
(
n
)
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
7
_
Z
M
a
n
a
c
h
e
r
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
l
c
a
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
L
o
w
e
s
t
 
C
o
m
m
o
n
 
A
n
c
e
s
t
o
r
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
B
i
n
a
r
y
 
l
i
f
t
i
n
g
 
a
n
d
 
E
u
l
e
r
-
t
o
u
r
 
+
 
R
M
Q
 
f
o
r
 
O
(
l
o
g
 
n
)
 
a
n
d
 
O
(
1
)
 
L
C
A
 
q
u
e
r
i
e
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
7
_
L
C
A
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
a
d
v
a
n
c
e
d
-
g
r
a
p
h
s
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
A
d
v
a
n
c
e
d
 
G
r
a
p
h
 
A
l
g
o
r
i
t
h
m
s
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
B
r
i
d
g
e
s
,
 
a
r
t
i
c
u
l
a
t
i
o
n
 
p
o
i
n
t
s
,
 
2
-
S
A
T
,
 
a
n
d
 
E
u
l
e
r
i
a
n
 
c
i
r
c
u
i
t
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
7
_
A
d
v
a
n
c
e
d
G
r
a
p
h
s
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
t
a
r
j
a
n
-
l
o
w
l
i
n
k
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
T
a
r
j
a
n
'
s
 
L
o
w
-
L
i
n
k
 
(
S
C
C
,
 
B
r
i
d
g
e
s
)
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
D
i
s
c
o
v
e
r
y
 
a
n
d
 
l
o
w
-
l
i
n
k
 
v
a
l
u
e
s
 
f
o
r
 
s
t
r
o
n
g
l
y
-
c
o
n
n
e
c
t
e
d
 
c
o
m
p
o
n
e
n
t
s
 
a
n
d
 
b
r
i
d
g
e
 
d
e
t
e
c
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
7
_
T
a
r
j
a
n
L
o
w
L
i
n
k
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
m
a
x
-
f
l
o
w
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
M
a
x
i
m
u
m
 
F
l
o
w
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
F
o
r
d
-
F
u
l
k
e
r
s
o
n
,
 
E
d
m
o
n
d
s
-
K
a
r
p
,
 
a
n
d
 
t
h
e
 
m
i
n
-
c
u
t
 
m
a
x
-
f
l
o
w
 
d
u
a
l
i
t
y
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
7
_
M
a
x
F
l
o
w
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
l
e
v
e
l
-
8
"
,


 
 
 
 
n
u
m
b
e
r
:
 
8
,


 
 
 
 
t
i
t
l
e
:
 
"
P
a
t
t
e
r
n
s
"
,


 
 
 
 
s
u
m
m
a
r
y
:


 
 
 
 
 
 
"
T
h
e
 
m
e
t
a
-
s
k
i
l
l
:
 
r
e
c
o
g
n
i
s
i
n
g
 
w
h
i
c
h
 
t
e
c
h
n
i
q
u
e
 
a
 
p
r
o
b
l
e
m
 
w
a
n
t
s
.
 
M
o
n
o
t
o
n
i
c
 
s
t
a
c
k
s
,
 
B
S
-
o
n
-
a
n
s
w
e
r
,
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
,
 
g
r
i
d
-
a
s
-
g
r
a
p
h
,
 
D
P
 
s
t
a
t
e
s
.
"
,


 
 
 
 
t
o
p
i
c
s
:
 
[
"
m
o
n
o
t
o
n
i
c
-
s
t
a
c
k
"
,
 
"
b
i
n
a
r
y
-
s
e
a
r
c
h
-
a
n
s
w
e
r
"
,
 
"
s
l
i
d
i
n
g
-
w
i
n
d
o
w
"
,
 
"
g
r
i
d
-
g
r
a
p
h
"
,
 
"
d
p
-
s
t
a
t
e
s
"
,
 
"
p
a
t
t
e
r
n
s
"
]
,


 
 
 
 
l
e
s
s
o
n
s
:
 
[


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
m
o
n
o
t
o
n
i
c
-
s
t
a
c
k
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
M
o
n
o
t
o
n
i
c
 
S
t
a
c
k
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
M
a
i
n
t
a
i
n
 
a
 
s
o
r
t
e
d
 
s
t
a
c
k
 
t
o
 
a
n
s
w
e
r
 
n
e
x
t
-
g
r
e
a
t
e
r
-
e
l
e
m
e
n
t
 
p
r
o
b
l
e
m
s
 
i
n
 
l
i
n
e
a
r
 
t
i
m
e
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
8
_
M
o
n
o
t
o
n
i
c
S
t
a
c
k
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
b
i
n
a
r
y
-
s
e
a
r
c
h
-
a
n
s
w
e
r
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
B
i
n
a
r
y
 
S
e
a
r
c
h
 
o
n
 
A
n
s
w
e
r
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
W
h
e
n
 
t
h
e
 
a
n
s
w
e
r
 
s
p
a
c
e
 
i
s
 
s
o
r
t
a
b
l
e
,
 
b
i
n
a
r
y
-
s
e
a
r
c
h
 
t
h
e
 
a
n
s
w
e
r
,
 
A
g
g
r
e
s
s
i
v
e
 
C
o
w
s
,
 
C
a
p
a
c
i
t
y
 
t
o
 
S
h
i
p
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
8
_
B
i
n
a
r
y
S
e
a
r
c
h
A
n
s
w
e
r
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
s
l
i
d
i
n
g
-
w
i
n
d
o
w
-
a
d
v
a
n
c
e
d
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
l
i
d
i
n
g
 
W
i
n
d
o
w
 
(
A
d
v
a
n
c
e
d
)
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
V
a
r
i
a
b
l
e
 
w
i
n
d
o
w
s
,
 
c
h
a
r
a
c
t
e
r
-
f
r
e
q
u
e
n
c
y
 
t
r
a
c
k
i
n
g
,
 
a
n
d
 
m
i
n
i
m
u
m
-
w
i
n
d
o
w
-
s
u
b
s
t
r
i
n
g
 
p
a
t
t
e
r
n
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
8
_
S
l
i
d
i
n
g
W
i
n
d
o
w
A
d
v
a
n
c
e
d
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
g
r
i
d
-
t
o
-
g
r
a
p
h
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
G
r
i
d
 
→
 
G
r
a
p
h
 
M
a
p
p
i
n
g
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
T
r
e
a
t
 
2
D
 
g
r
i
d
s
 
a
s
 
i
m
p
l
i
c
i
t
 
g
r
a
p
h
s
,
 
f
l
o
o
d
 
f
i
l
l
,
 
s
h
o
r
t
e
s
t
 
p
a
t
h
 
o
n
 
a
 
g
r
i
d
,
 
i
s
l
a
n
d
s
 
c
o
u
n
t
i
n
g
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
8
_
G
r
i
d
T
o
G
r
a
p
h
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
d
p
-
s
t
a
t
e
-
d
e
s
i
g
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
D
P
 
S
t
a
t
e
 
D
e
s
i
g
n
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
P
i
c
k
i
n
g
 
t
h
e
 
r
i
g
h
t
 
s
t
a
t
e
,
 
w
h
a
t
 
t
o
 
m
e
m
o
i
z
e
 
a
n
d
 
w
h
a
t
 
t
o
 
d
r
o
p
,
 
f
o
r
 
h
a
r
d
e
r
 
D
P
 
p
r
o
b
l
e
m
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
8
_
D
P
S
t
a
t
e
D
e
s
i
g
n
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
s
l
u
g
:
 
"
p
a
t
t
e
r
n
-
r
e
c
o
g
n
i
t
i
o
n
"
,


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
"
P
a
t
t
e
r
n
 
R
e
c
o
g
n
i
t
i
o
n
"
,


 
 
 
 
 
 
 
 
s
u
m
m
a
r
y
:
 
"
M
a
p
 
a
 
n
e
w
 
p
r
o
b
l
e
m
 
t
o
 
a
 
k
n
o
w
n
 
t
e
c
h
n
i
q
u
e
 
f
a
s
t
,
 
t
h
e
 
m
e
t
a
-
s
k
i
l
l
 
t
h
a
t
 
s
e
p
a
r
a
t
e
s
 
f
a
s
t
 
s
o
l
v
e
r
s
.
"
,


 
 
 
 
 
 
 
 
l
o
a
d
:
 
l
a
z
y
(
(
)
 
=
>
 
i
m
p
o
r
t
(
"
.
/
l
e
s
s
o
n
s
/
L
8
_
P
a
t
t
e
r
n
R
e
c
o
g
n
i
t
i
o
n
"
)
)
,


 
 
 
 
 
 
}
,


 
 
 
 
]
,


 
 
}
,


]
;




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
 
f
i
n
d
L
e
v
e
l
(
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
)
:
 
L
e
v
e
l
E
n
t
r
y
 
|
 
u
n
d
e
f
i
n
e
d
 
{


 
 
r
e
t
u
r
n
 
L
E
V
E
L
S
.
f
i
n
d
(
(
l
)
 
=
>
 
l
.
i
d
 
=
=
=
 
l
e
v
e
l
I
d
)
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
 
f
i
n
d
L
e
s
s
o
n
(
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
,
 
l
e
s
s
o
n
S
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
)
:
 
{


 
 
l
e
v
e
l
:
 
L
e
v
e
l
E
n
t
r
y
;


 
 
l
e
s
s
o
n
:
 
L
e
s
s
o
n
E
n
t
r
y
;


 
 
l
e
s
s
o
n
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
 
|
 
u
n
d
e
f
i
n
e
d
 
{


 
 
c
o
n
s
t
 
l
e
v
e
l
 
=
 
f
i
n
d
L
e
v
e
l
(
l
e
v
e
l
I
d
)
;


 
 
i
f
 
(
!
l
e
v
e
l
)
 
r
e
t
u
r
n
 
u
n
d
e
f
i
n
e
d
;


 
 
c
o
n
s
t
 
l
e
s
s
o
n
I
n
d
e
x
 
=
 
l
e
v
e
l
.
l
e
s
s
o
n
s
.
f
i
n
d
I
n
d
e
x
(
(
l
)
 
=
>
 
l
.
s
l
u
g
 
=
=
=
 
l
e
s
s
o
n
S
l
u
g
)
;


 
 
i
f
 
(
l
e
s
s
o
n
I
n
d
e
x
 
=
=
=
 
-
1
)
 
r
e
t
u
r
n
 
u
n
d
e
f
i
n
e
d
;


 
 
r
e
t
u
r
n
 
{
 
l
e
v
e
l
,
 
l
e
s
s
o
n
:
 
l
e
v
e
l
.
l
e
s
s
o
n
s
[
l
e
s
s
o
n
I
n
d
e
x
]
,
 
l
e
s
s
o
n
I
n
d
e
x
 
}
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
 
g
e
t
N
e
i
g
h
b
o
u
r
s
(
l
e
v
e
l
I
d
:
 
s
t
r
i
n
g
,
 
l
e
s
s
o
n
S
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
)
:
 
{


 
 
p
r
e
v
?
:
 
{
 
l
e
v
e
l
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
 
}
;


 
 
n
e
x
t
?
:
 
{
 
l
e
v
e
l
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
 
}
;


}
 
{


 
 
c
o
n
s
t
 
f
o
u
n
d
 
=
 
f
i
n
d
L
e
s
s
o
n
(
l
e
v
e
l
I
d
,
 
l
e
s
s
o
n
S
l
u
g
)
;


 
 
i
f
 
(
!
f
o
u
n
d
)
 
r
e
t
u
r
n
 
{
}
;


 
 
c
o
n
s
t
 
{
 
l
e
v
e
l
,
 
l
e
s
s
o
n
I
n
d
e
x
 
}
 
=
 
f
o
u
n
d
;


 
 
c
o
n
s
t
 
l
e
v
e
l
I
d
x
 
=
 
L
E
V
E
L
S
.
f
i
n
d
I
n
d
e
x
(
(
l
)
 
=
>
 
l
.
i
d
 
=
=
=
 
l
e
v
e
l
.
i
d
)
;




 
 
l
e
t
 
p
r
e
v
:
 
{
 
l
e
v
e
l
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
 
}
 
|
 
u
n
d
e
f
i
n
e
d
;


 
 
i
f
 
(
l
e
s
s
o
n
I
n
d
e
x
 
>
 
0
)
 
{


 
 
 
 
c
o
n
s
t
 
p
 
=
 
l
e
v
e
l
.
l
e
s
s
o
n
s
[
l
e
s
s
o
n
I
n
d
e
x
 
-
 
1
]
;


 
 
 
 
p
r
e
v
 
=
 
{
 
l
e
v
e
l
I
d
:
 
l
e
v
e
l
.
i
d
,
 
s
l
u
g
:
 
p
.
s
l
u
g
,
 
t
i
t
l
e
:
 
p
.
t
i
t
l
e
 
}
;


 
 
}
 
e
l
s
e
 
i
f
 
(
l
e
v
e
l
I
d
x
 
>
 
0
)
 
{


 
 
 
 
c
o
n
s
t
 
p
r
e
v
L
e
v
e
l
 
=
 
L
E
V
E
L
S
[
l
e
v
e
l
I
d
x
 
-
 
1
]
;


 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
r
e
v
L
e
v
e
l
.
l
e
s
s
o
n
s
[
p
r
e
v
L
e
v
e
l
.
l
e
s
s
o
n
s
.
l
e
n
g
t
h
 
-
 
1
]
;


 
 
 
 
i
f
 
(
p
)
 
p
r
e
v
 
=
 
{
 
l
e
v
e
l
I
d
:
 
p
r
e
v
L
e
v
e
l
.
i
d
,
 
s
l
u
g
:
 
p
.
s
l
u
g
,
 
t
i
t
l
e
:
 
p
.
t
i
t
l
e
 
}
;


 
 
}




 
 
l
e
t
 
n
e
x
t
:
 
{
 
l
e
v
e
l
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
 
}
 
|
 
u
n
d
e
f
i
n
e
d
;


 
 
i
f
 
(
l
e
s
s
o
n
I
n
d
e
x
 
<
 
l
e
v
e
l
.
l
e
s
s
o
n
s
.
l
e
n
g
t
h
 
-
 
1
)
 
{


 
 
 
 
c
o
n
s
t
 
n
 
=
 
l
e
v
e
l
.
l
e
s
s
o
n
s
[
l
e
s
s
o
n
I
n
d
e
x
 
+
 
1
]
;


 
 
 
 
n
e
x
t
 
=
 
{
 
l
e
v
e
l
I
d
:
 
l
e
v
e
l
.
i
d
,
 
s
l
u
g
:
 
n
.
s
l
u
g
,
 
t
i
t
l
e
:
 
n
.
t
i
t
l
e
 
}
;


 
 
}
 
e
l
s
e
 
i
f
 
(
l
e
v
e
l
I
d
x
 
<
 
L
E
V
E
L
S
.
l
e
n
g
t
h
 
-
 
1
)
 
{


 
 
 
 
c
o
n
s
t
 
n
e
x
t
L
e
v
e
l
 
=
 
L
E
V
E
L
S
[
l
e
v
e
l
I
d
x
 
+
 
1
]
;


 
 
 
 
c
o
n
s
t
 
n
 
=
 
n
e
x
t
L
e
v
e
l
.
l
e
s
s
o
n
s
[
0
]
;


 
 
 
 
i
f
 
(
n
)
 
n
e
x
t
 
=
 
{
 
l
e
v
e
l
I
d
:
 
n
e
x
t
L
e
v
e
l
.
i
d
,
 
s
l
u
g
:
 
n
.
s
l
u
g
,
 
t
i
t
l
e
:
 
n
.
t
i
t
l
e
 
}
;


 
 
}




 
 
r
e
t
u
r
n
 
{
 
p
r
e
v
,
 
n
e
x
t
 
}
;


}


