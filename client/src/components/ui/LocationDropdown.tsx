
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
S
t
a
t
e
,
 
u
s
e
R
e
f
,
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
C
a
l
l
b
a
c
k
 
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
 
t
y
p
e
 
{
 
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
 
M
a
p
P
i
n
,
 
C
h
e
v
r
o
n
D
o
w
n
,
 
X
,
 
S
e
a
r
c
h
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;




/
/
 
─
─
─
 
P
o
p
u
l
a
r
 
j
o
b
-
s
e
a
r
c
h
 
l
o
c
a
t
i
o
n
s
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
r
e
f
r
e
s
h
/
o
n
l
y
-
e
x
p
o
r
t
-
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
 
P
O
P
U
L
A
R
_
L
O
C
A
T
I
O
N
S
:
 
s
t
r
i
n
g
[
]
 
=
 
[


 
 
"
R
e
m
o
t
e
"
,


 
 
"
W
o
r
l
d
w
i
d
e
"
,


 
 
"
U
n
i
t
e
d
 
S
t
a
t
e
s
"
,


 
 
"
U
n
i
t
e
d
 
K
i
n
g
d
o
m
"
,


 
 
"
I
n
d
i
a
"
,


 
 
"
C
a
n
a
d
a
"
,


 
 
"
G
e
r
m
a
n
y
"
,


 
 
"
A
u
s
t
r
a
l
i
a
"
,


 
 
"
S
i
n
g
a
p
o
r
e
"
,


 
 
"
N
e
t
h
e
r
l
a
n
d
s
"
,


 
 
"
F
r
a
n
c
e
"
,


 
 
"
S
p
a
i
n
"
,


 
 
"
B
r
a
z
i
l
"
,


 
 
"
N
e
w
 
Y
o
r
k
,
 
N
Y
"
,


 
 
"
S
a
n
 
F
r
a
n
c
i
s
c
o
,
 
C
A
"
,


 
 
"
L
o
n
d
o
n
,
 
U
K
"
,


 
 
"
B
e
r
l
i
n
,
 
G
e
r
m
a
n
y
"
,


 
 
"
B
e
n
g
a
l
u
r
u
,
 
I
n
d
i
a
"
,


 
 
"
M
u
m
b
a
i
,
 
I
n
d
i
a
"
,


 
 
"
T
o
r
o
n
t
o
,
 
C
a
n
a
d
a
"
,


 
 
"
S
y
d
n
e
y
,
 
A
u
s
t
r
a
l
i
a
"
,


 
 
"
A
m
s
t
e
r
d
a
m
,
 
N
e
t
h
e
r
l
a
n
d
s
"
,


 
 
"
P
a
r
i
s
,
 
F
r
a
n
c
e
"
,


 
 
"
D
u
b
l
i
n
,
 
I
r
e
l
a
n
d
"
,


 
 
"
D
u
b
a
i
,
 
U
A
E
"
,


 
 
"
T
o
k
y
o
,
 
J
a
p
a
n
"
,


 
 
"
S
ã
o
 
P
a
u
l
o
,
 
B
r
a
z
i
l
"
,


 
 
"
M
e
x
i
c
o
 
C
i
t
y
,
 
M
e
x
i
c
o
"
,


 
 
"
W
a
r
s
a
w
,
 
P
o
l
a
n
d
"
,


 
 
"
L
i
s
b
o
n
,
 
P
o
r
t
u
g
a
l
"
,


]
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
 
L
o
c
a
t
i
o
n
D
r
o
p
d
o
w
n
P
r
o
p
s
 
{


 
 
v
a
l
u
e
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
C
h
a
n
g
e
:
 
(
v
a
l
u
e
:
 
s
t
r
i
n
g
)
 
=
>
 
v
o
i
d
;


 
 
o
n
S
e
a
r
c
h
?
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
p
l
a
c
e
h
o
l
d
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


 
 
c
l
a
s
s
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
 
L
o
c
a
t
i
o
n
D
r
o
p
d
o
w
n
(
{


 
 
v
a
l
u
e
,


 
 
o
n
C
h
a
n
g
e
,


 
 
o
n
S
e
a
r
c
h
,


 
 
p
l
a
c
e
h
o
l
d
e
r
 
=
 
"
L
o
c
a
t
i
o
n
"
,


 
 
c
l
a
s
s
N
a
m
e
 
=
 
"
"
,


 
 
i
d
 
=
 
"
l
o
c
a
t
i
o
n
-
d
r
o
p
d
o
w
n
"
,


}
:
 
L
o
c
a
t
i
o
n
D
r
o
p
d
o
w
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
 
[
o
p
e
n
,
 
s
e
t
O
p
e
n
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
q
u
e
r
y
,
 
s
e
t
Q
u
e
r
y
]
 
=
 
u
s
e
S
t
a
t
e
(
v
a
l
u
e
)
;


 
 
c
o
n
s
t
 
[
a
c
t
i
v
e
I
n
d
e
x
,
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
]
 
=
 
u
s
e
S
t
a
t
e
(
-
1
)
;




 
 
c
o
n
s
t
 
c
o
n
t
a
i
n
e
r
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
D
i
v
E
l
e
m
e
n
t
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
i
n
p
u
t
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
l
i
s
t
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
U
L
i
s
t
E
l
e
m
e
n
t
>
(
n
u
l
l
)
;




 
 
/
/
 
D
e
b
o
u
n
c
e
 
t
i
m
e
r
 
r
e
f


 
 
c
o
n
s
t
 
d
e
b
o
u
n
c
e
R
e
f
 
=
 
u
s
e
R
e
f
<
R
e
t
u
r
n
T
y
p
e
<
t
y
p
e
o
f
 
s
e
t
T
i
m
e
o
u
t
>
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;




 
 
/
/
 
F
i
l
t
e
r
e
d
 
o
p
t
i
o
n
s
:
 
d
e
d
u
p
l
i
c
a
t
e
 
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
i
s
e
 
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
e
s


 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
 
=
 
P
O
P
U
L
A
R
_
L
O
C
A
T
I
O
N
S
.
f
i
l
t
e
r
(
(
l
o
c
)
 
=
>


 
 
 
 
l
o
c
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
.
i
n
c
l
u
d
e
s
(
q
u
e
r
y
.
t
r
i
m
(
)
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
)


 
 
)
.
s
l
i
c
e
(
0
,
 
1
0
)
;




 
 
c
o
n
s
t
 
[
p
r
e
v
V
a
l
u
e
,
 
s
e
t
P
r
e
v
V
a
l
u
e
]
 
=
 
u
s
e
S
t
a
t
e
(
v
a
l
u
e
)
;


 
 
c
o
n
s
t
 
[
p
r
e
v
O
p
e
n
,
 
s
e
t
P
r
e
v
O
p
e
n
]
 
=
 
u
s
e
S
t
a
t
e
(
o
p
e
n
)
;




 
 
/
/
 
─
─
 
S
y
n
c
 
e
x
t
e
r
n
a
l
 
v
a
l
u
e
 
→
 
q
u
e
r
y
 
w
h
e
n
 
c
l
o
s
e
d
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
i
f
 
(
v
a
l
u
e
 
!
=
=
 
p
r
e
v
V
a
l
u
e
 
|
|
 
o
p
e
n
 
!
=
=
 
p
r
e
v
O
p
e
n
)
 
{


 
 
 
 
s
e
t
P
r
e
v
V
a
l
u
e
(
v
a
l
u
e
)
;


 
 
 
 
s
e
t
P
r
e
v
O
p
e
n
(
o
p
e
n
)
;


 
 
 
 
i
f
 
(
!
o
p
e
n
)
 
{


 
 
 
 
 
 
s
e
t
Q
u
e
r
y
(
v
a
l
u
e
)
;


 
 
 
 
}


 
 
}




 
 
c
o
n
s
t
 
c
o
m
m
i
t
S
e
l
e
c
t
i
o
n
 
=
 
u
s
e
C
a
l
l
b
a
c
k
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
 
t
r
i
m
m
e
d
 
=
 
q
u
e
r
y
.
t
r
i
m
(
)
;


 
 
 
 
/
/
 
I
f
 
t
y
p
e
d
 
t
e
x
t
 
e
x
a
c
t
l
y
 
m
a
t
c
h
e
s
 
a
n
 
o
p
t
i
o
n
 
(
c
a
s
e
-
i
n
s
e
n
s
i
t
i
v
e
)
,
 
n
o
r
m
a
l
i
s
e


 
 
 
 
c
o
n
s
t
 
m
a
t
c
h
 
=
 
P
O
P
U
L
A
R
_
L
O
C
A
T
I
O
N
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
 
t
r
i
m
m
e
d
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


 
 
 
 
)
;


 
 
 
 
c
o
n
s
t
 
f
i
n
a
l
 
=
 
m
a
t
c
h
 
?
?
 
t
r
i
m
m
e
d
;


 
 
 
 
s
e
t
Q
u
e
r
y
(
f
i
n
a
l
)
;


 
 
 
 
o
n
C
h
a
n
g
e
(
f
i
n
a
l
)
;


 
 
}
,
 
[
q
u
e
r
y
,
 
o
n
C
h
a
n
g
e
]
)
;




 
 
/
/
 
─
─
 
C
l
o
s
e
 
o
n
 
o
u
t
s
i
d
e
 
c
l
i
c
k
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
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
r
 
=
 
(
e
:
 
M
o
u
s
e
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
c
o
n
t
a
i
n
e
r
R
e
f
.
c
u
r
r
e
n
t
 
&
&
 
!
c
o
n
t
a
i
n
e
r
R
e
f
.
c
u
r
r
e
n
t
.
c
o
n
t
a
i
n
s
(
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
 
N
o
d
e
)
)
 
{


 
 
 
 
 
 
 
 
c
o
m
m
i
t
S
e
l
e
c
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
s
e
t
O
p
e
n
(
f
a
l
s
e
)
;


 
 
 
 
 
 
}


 
 
 
 
}
;


 
 
 
 
d
o
c
u
m
e
n
t
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
m
o
u
s
e
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
r
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
 
d
o
c
u
m
e
n
t
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
m
o
u
s
e
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
r
)
;


 
 
}
,
 
[
c
o
m
m
i
t
S
e
l
e
c
t
i
o
n
]
)
;




 
 
/
/
 
─
─
 
S
c
r
o
l
l
 
a
c
t
i
v
e
 
i
t
e
m
 
i
n
t
o
 
v
i
e
w
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


 
 
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


 
 
 
 
i
f
 
(
a
c
t
i
v
e
I
n
d
e
x
 
>
=
 
0
 
&
&
 
l
i
s
t
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
i
t
e
m
 
=
 
l
i
s
t
R
e
f
.
c
u
r
r
e
n
t
.
c
h
i
l
d
r
e
n
[
a
c
t
i
v
e
I
n
d
e
x
]
 
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


 
 
 
 
 
 
i
t
e
m
?
.
s
c
r
o
l
l
I
n
t
o
V
i
e
w
(
{
 
b
l
o
c
k
:
 
"
n
e
a
r
e
s
t
"
 
}
)
;


 
 
 
 
}


 
 
}
,
 
[
a
c
t
i
v
e
I
n
d
e
x
]
)
;




 
 
c
o
n
s
t
 
s
e
l
e
c
t
O
p
t
i
o
n
 
=
 
(
o
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
)
 
=
>
 
{


 
 
 
 
s
e
t
Q
u
e
r
y
(
o
p
t
i
o
n
)
;


 
 
 
 
o
n
C
h
a
n
g
e
(
o
p
t
i
o
n
)
;


 
 
 
 
s
e
t
O
p
e
n
(
f
a
l
s
e
)
;


 
 
 
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
-
1
)
;


 
 
}
;




 
 
c
o
n
s
t
 
c
l
e
a
r
V
a
l
u
e
 
=
 
(
e
:
 
R
e
a
c
t
.
M
o
u
s
e
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
s
e
t
Q
u
e
r
y
(
"
"
)
;


 
 
 
 
o
n
C
h
a
n
g
e
(
"
"
)
;


 
 
 
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
-
1
)
;


 
 
 
 
i
n
p
u
t
R
e
f
.
c
u
r
r
e
n
t
?
.
f
o
c
u
s
(
)
;


 
 
}
;




 
 
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
I
n
p
u
t
C
h
a
n
g
e
 
=
 
(
e
:
 
R
e
a
c
t
.
C
h
a
n
g
e
E
v
e
n
t
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
v
a
l
 
=
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
;


 
 
 
 
s
e
t
Q
u
e
r
y
(
v
a
l
)
;


 
 
 
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
-
1
)
;


 
 
 
 
s
e
t
O
p
e
n
(
t
r
u
e
)
;




 
 
 
 
/
/
 
D
e
b
o
u
n
c
e
d
 
p
r
o
p
a
g
a
t
i
o
n
 
t
o
 
p
a
r
e
n
t


 
 
 
 
i
f
 
(
d
e
b
o
u
n
c
e
R
e
f
.
c
u
r
r
e
n
t
)
 
c
l
e
a
r
T
i
m
e
o
u
t
(
d
e
b
o
u
n
c
e
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
d
e
b
o
u
n
c
e
R
e
f
.
c
u
r
r
e
n
t
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
o
n
C
h
a
n
g
e
(
v
a
l
)
;


 
 
 
 
}
,
 
3
0
0
)
;


 
 
}
;




 
 
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
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
o
p
e
n
 
&
&
 
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
D
o
w
n
"
 
|
|
 
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
U
p
"
)
)
 
{


 
 
 
 
 
 
s
e
t
O
p
e
n
(
t
r
u
e
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
s
w
i
t
c
h
 
(
e
.
k
e
y
)
 
{


 
 
 
 
 
 
c
a
s
e
 
"
A
r
r
o
w
D
o
w
n
"
:


 
 
 
 
 
 
 
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
(
p
r
e
v
)
 
=
>
 
M
a
t
h
.
m
i
n
(
p
r
e
v
 
+
 
1
,
 
f
i
l
t
e
r
e
d
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
)
;


 
 
 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
 
 
c
a
s
e
 
"
A
r
r
o
w
U
p
"
:


 
 
 
 
 
 
 
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
(
p
r
e
v
)
 
=
>
 
M
a
t
h
.
m
a
x
(
p
r
e
v
 
-
 
1
,
 
-
1
)
)
;


 
 
 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
 
 
c
a
s
e
 
"
E
n
t
e
r
"
:


 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
i
f
 
(
a
c
t
i
v
e
I
n
d
e
x
 
>
=
 
0
 
&
&
 
f
i
l
t
e
r
e
d
[
a
c
t
i
v
e
I
n
d
e
x
]
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
l
e
c
t
O
p
t
i
o
n
(
f
i
l
t
e
r
e
d
[
a
c
t
i
v
e
I
n
d
e
x
]
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
c
o
m
m
i
t
S
e
l
e
c
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
 
 
s
e
t
O
p
e
n
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
 
 
o
n
S
e
a
r
c
h
?
.
(
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
 
 
c
a
s
e
 
"
E
s
c
a
p
e
"
:


 
 
 
 
 
 
 
 
s
e
t
O
p
e
n
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
-
1
)
;


 
 
 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
 
 
c
a
s
e
 
"
T
a
b
"
:


 
 
 
 
 
 
 
 
i
f
 
(
a
c
t
i
v
e
I
n
d
e
x
 
>
=
 
0
 
&
&
 
f
i
l
t
e
r
e
d
[
a
c
t
i
v
e
I
n
d
e
x
]
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
l
e
c
t
O
p
t
i
o
n
(
f
i
l
t
e
r
e
d
[
a
c
t
i
v
e
I
n
d
e
x
]
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
c
o
m
m
i
t
S
e
l
e
c
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
s
e
t
O
p
e
n
(
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
}


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v


 
 
 
 
 
 
r
e
f
=
{
c
o
n
t
a
i
n
e
r
R
e
f
}


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
r
e
l
a
t
i
v
e
 
$
{
c
l
a
s
s
N
a
m
e
}
`
}


 
 
 
 
 
 
r
o
l
e
=
"
c
o
m
b
o
b
o
x
"


 
 
 
 
 
 
a
r
i
a
-
e
x
p
a
n
d
e
d
=
{
o
p
e
n
}


 
 
 
 
 
 
a
r
i
a
-
h
a
s
p
o
p
u
p
=
"
l
i
s
t
b
o
x
"


 
 
 
 
 
 
a
r
i
a
-
o
w
n
s
=
{
`
$
{
i
d
}
-
l
i
s
t
b
o
x
`
}


 
 
 
 
>


 
 
 
 
 
 
{
/
*
 
T
r
i
g
g
e
r
 
a
r
e
a
 
*
/
}


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
l
-
3
 
p
r
-
2
 
p
y
-
3
 
b
o
r
d
e
r
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
s
m
 
c
u
r
s
o
r
-
t
e
x
t
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l


 
 
 
 
 
 
 
 
 
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0


 
 
 
 
 
 
 
 
 
 
f
o
c
u
s
-
w
i
t
h
i
n
:
r
i
n
g
-
2
 
f
o
c
u
s
-
w
i
t
h
i
n
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
-
w
i
t
h
i
n
:
r
i
n
g
-
w
h
i
t
e
/
2
0


 
 
 
 
 
 
 
 
 
 
$
{
o
p
e
n
 
?
 
"
r
i
n
g
-
2
 
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
r
i
n
g
-
w
h
i
t
e
/
2
0
"
 
:
 
"
"
}
`
}


 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
O
p
e
n
(
t
r
u
e
)
;


 
 
 
 
 
 
 
 
 
 
i
n
p
u
t
R
e
f
.
c
u
r
r
e
n
t
?
.
f
o
c
u
s
(
)
;


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
M
a
p
P
i
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
s
h
r
i
n
k
-
0
"
 
/
>




 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
i
n
p
u
t
R
e
f
}


 
 
 
 
 
 
 
 
 
 
i
d
=
{
i
d
}


 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
"
s
e
a
r
c
h
b
o
x
"


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
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
=
"
l
i
s
t
"


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
c
o
n
t
r
o
l
s
=
{
`
$
{
i
d
}
-
l
i
s
t
b
o
x
`
}


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
a
c
t
i
v
e
d
e
s
c
e
n
d
a
n
t
=
{


 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
I
n
d
e
x
 
>
=
 
0
 
?
 
`
$
{
i
d
}
-
o
p
t
i
o
n
-
$
{
a
c
t
i
v
e
I
n
d
e
x
}
`
 
:
 
u
n
d
e
f
i
n
e
d


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
q
u
e
r
y
}


 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
h
a
n
d
l
e
I
n
p
u
t
C
h
a
n
g
e
}


 
 
 
 
 
 
 
 
 
 
o
n
F
o
c
u
s
=
{
(
)
 
=
>
 
s
e
t
O
p
e
n
(
t
r
u
e
)
}


 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
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
}


 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
{
p
l
a
c
e
h
o
l
d
e
r
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
m
i
n
-
w
-
0
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
o
u
t
l
i
n
e
-
n
o
n
e
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
 
w
-
f
u
l
l
 
s
m
:
w
-
3
6
"


 
 
 
 
 
 
 
 
 
 
a
u
t
o
C
o
m
p
l
e
t
e
=
"
o
f
f
"


 
 
 
 
 
 
 
 
 
 
s
p
e
l
l
C
h
e
c
k
=
{
f
a
l
s
e
}


 
 
 
 
 
 
 
 
/
>




 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
{
q
u
e
r
y
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
c
l
e
a
r
V
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
C
l
e
a
r
 
l
o
c
a
t
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
-
0
.
5
 
r
o
u
n
d
e
d
-
f
u
l
l
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
6
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
D
o
w
n


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
4
 
h
-
4
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
t
r
a
n
s
f
o
r
m
 
d
u
r
a
t
i
o
n
-
2
0
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
e
n
 
?
 
"
r
o
t
a
t
e
-
1
8
0
"
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
D
r
o
p
d
o
w
n
 
l
i
s
t
 
*
/
}


 
 
 
 
 
 
{
o
p
e
n
 
&
&
 
(


 
 
 
 
 
 
 
 
<
u
l


 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
l
i
s
t
R
e
f
}


 
 
 
 
 
 
 
 
 
 
i
d
=
{
`
$
{
i
d
}
-
l
i
s
t
b
o
x
`
}


 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
"
l
i
s
t
b
o
x
"


 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
L
o
c
a
t
i
o
n
 
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
"


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
z
-
5
0
 
m
t
-
1
 
w
-
f
u
l
l
 
m
i
n
-
w
-
[
2
2
0
p
x
]
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
r
o
u
n
d
e
d
-
x
l
 
s
h
a
d
o
w
-
x
l
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
m
a
x
-
h
-
6
4
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
"
A
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
"
 
s
h
o
r
t
c
u
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
q
u
e
r
y
.
l
e
n
g
t
h
 
=
=
=
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
"
_
_
a
l
l
_
_
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
"
o
p
t
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
s
e
l
e
c
t
e
d
=
{
v
a
l
u
e
 
=
=
=
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
l
e
c
t
O
p
t
i
o
n
(
"
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
2
.
5
 
t
e
x
t
-
s
m
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
s
e
l
e
c
t
-
n
o
n
e
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
i
t
a
l
i
c


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
a
y
-
7
0
0
/
6
0
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
h
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
.
l
e
n
g
t
h
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
t
e
r
e
d
.
m
a
p
(
(
l
o
c
,
 
i
d
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
l
o
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
{
`
$
{
i
d
}
-
o
p
t
i
o
n
-
$
{
i
d
x
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
l
e
=
"
o
p
t
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
s
e
l
e
c
t
e
d
=
{
v
a
l
u
e
 
=
=
=
 
l
o
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
l
e
c
t
O
p
t
i
o
n
(
l
o
c
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
M
o
u
s
e
E
n
t
e
r
=
{
(
)
 
=
>
 
s
e
t
A
c
t
i
v
e
I
n
d
e
x
(
i
d
x
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
2
.
5
 
t
e
x
t
-
s
m
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
s
e
l
e
c
t
-
n
o
n
e
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
x
 
=
=
=
 
a
c
t
i
v
e
I
n
d
e
x


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
7
0
0
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
v
a
l
u
e
 
=
=
=
 
l
o
c


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
7
0
0
/
5
0
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
f
o
n
t
-
m
e
d
i
u
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
5
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
a
y
-
7
0
0
/
6
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
P
i
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
 
s
h
r
i
n
k
-
0
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
c
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
 
=
=
=
 
l
o
c
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
m
l
-
a
u
t
o
 
t
e
x
t
-
x
s
 
t
e
x
t
-
g
r
e
e
n
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
"
>
✓
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
3
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
i
t
a
l
i
c
 
s
e
l
e
c
t
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
h
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
 
m
a
t
c
h
e
s
 
—
 
p
r
e
s
s
 
E
n
t
e
r
 
t
o
 
s
e
a
r
c
h
 
"
{
q
u
e
r
y
}
"


 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


