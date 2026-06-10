
i
m
p
o
r
t
 
{
 
B
r
i
e
f
c
a
s
e
,
 
C
h
e
c
k
C
i
r
c
l
e
,
 
L
o
a
d
e
r
2
,
 
M
a
p
P
i
n
 
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


i
m
p
o
r
t
 
{
 
T
o
g
g
l
e
P
i
l
l
s
 
}
 
f
r
o
m
 
"
.
/
T
o
g
g
l
e
P
i
l
l
s
"
;


i
m
p
o
r
t
 
{
 
i
n
p
u
t
C
l
a
s
s
,
 
l
a
b
e
l
C
l
a
s
s
 
}
 
f
r
o
m
 
"
.
/
s
t
y
l
e
s
"
;


i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
f
r
o
m
 
"
@
/
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
/
u
i
/
t
o
a
s
t
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
S
e
c
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


 
 
j
o
b
P
r
e
f
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
;


 
 
j
o
b
P
r
e
f
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
;


 
 
j
o
b
P
r
e
f
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
;


 
 
j
o
b
P
r
e
f
S
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
;


 
 
j
o
b
P
r
e
f
W
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


 
 
j
o
b
P
r
e
f
E
x
p
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


 
 
j
o
b
P
r
e
f
D
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


 
 
s
a
v
i
n
g
J
o
b
P
r
e
f
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


 
 
o
n
R
o
l
e
s
C
h
a
n
g
e
:
 
(
v
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
k
i
l
l
s
C
h
a
n
g
e
:
 
(
v
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
L
o
c
a
t
i
o
n
s
C
h
a
n
g
e
:
 
(
v
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
a
l
a
r
y
C
h
a
n
g
e
:
 
(
v
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
W
o
r
k
M
o
d
e
C
h
a
n
g
e
:
 
(
v
:
 
s
t
r
i
n
g
[
]
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
E
x
p
L
e
v
e
l
C
h
a
n
g
e
:
 
(
v
:
 
s
t
r
i
n
g
[
]
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
D
o
m
a
i
n
s
C
h
a
n
g
e
:
 
(
v
:
 
s
t
r
i
n
g
[
]
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
a
v
i
n
g
C
h
a
n
g
e
:
 
(
v
:
 
b
o
o
l
e
a
n
)
 
=
>
 
v
o
i
d
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
S
e
c
t
i
o
n
(
{


 
 
j
o
b
P
r
e
f
R
o
l
e
s
,


 
 
j
o
b
P
r
e
f
S
k
i
l
l
s
,


 
 
j
o
b
P
r
e
f
L
o
c
a
t
i
o
n
s
,


 
 
j
o
b
P
r
e
f
S
a
l
a
r
y
,


 
 
j
o
b
P
r
e
f
W
o
r
k
M
o
d
e
,


 
 
j
o
b
P
r
e
f
E
x
p
L
e
v
e
l
,


 
 
j
o
b
P
r
e
f
D
o
m
a
i
n
s
,


 
 
s
a
v
i
n
g
J
o
b
P
r
e
f
s
,


 
 
o
n
R
o
l
e
s
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
k
i
l
l
s
C
h
a
n
g
e
,


 
 
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
s
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
a
l
a
r
y
C
h
a
n
g
e
,


 
 
o
n
W
o
r
k
M
o
d
e
C
h
a
n
g
e
,


 
 
o
n
E
x
p
L
e
v
e
l
C
h
a
n
g
e
,


 
 
o
n
D
o
m
a
i
n
s
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
a
v
i
n
g
C
h
a
n
g
e
,


}
:
 
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
S
e
c
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
 
h
a
n
d
l
e
S
a
v
e
 
=
 
a
s
y
n
c
 
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
 
s
p
l
i
t
 
=
 
(
s
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
 
s
.
s
p
l
i
t
(
"
,
"
)
.
m
a
p
(
(
v
)
 
=
>
 
v
.
t
r
i
m
(
)
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
;


 
 
 
 
o
n
S
a
v
i
n
g
C
h
a
n
g
e
(
t
r
u
e
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
u
t
(
"
/
j
o
b
-
f
e
e
d
/
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
"
,
 
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
p
l
i
t
(
j
o
b
P
r
e
f
R
o
l
e
s
)
,


 
 
 
 
 
 
 
 
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
p
l
i
t
(
j
o
b
P
r
e
f
S
k
i
l
l
s
)
,


 
 
 
 
 
 
 
 
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
p
l
i
t
(
j
o
b
P
r
e
f
L
o
c
a
t
i
o
n
s
)
,


 
 
 
 
 
 
 
 
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
 
j
o
b
P
r
e
f
S
a
l
a
r
y
 
?
 
N
u
m
b
e
r
(
j
o
b
P
r
e
f
S
a
l
a
r
y
)
 
*
 
1
0
0
0
0
0
 
:
 
n
u
l
l
,


 
 
 
 
 
 
 
 
w
o
r
k
M
o
d
e
:
 
j
o
b
P
r
e
f
W
o
r
k
M
o
d
e
,


 
 
 
 
 
 
 
 
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
 
j
o
b
P
r
e
f
E
x
p
L
e
v
e
l
,


 
 
 
 
 
 
 
 
d
o
m
a
i
n
s
:
 
j
o
b
P
r
e
f
D
o
m
a
i
n
s
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
J
o
b
 
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
 
s
a
v
e
d
!
"
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
s
a
v
e
 
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
"
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
o
n
S
a
v
i
n
g
C
h
a
n
g
e
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
x
-
5
 
p
y
-
5
 
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
<
p
 
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
s
t
o
n
e
-
5
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
T
h
e
s
e
 
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
 
h
e
l
p
 
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
 
f
i
n
d
 
t
h
e
 
b
e
s
t
 
j
o
b
s
 
f
o
r
 
y
o
u
.


 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
l
a
b
e
l
C
l
a
s
s
}
>
<
B
r
i
e
f
c
a
s
e
 
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
 
D
e
s
i
r
e
d
 
r
o
l
e
s
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
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
 
v
a
l
u
e
=
{
j
o
b
P
r
e
f
R
o
l
e
s
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
(
e
)
 
=
>
 
o
n
R
o
l
e
s
C
h
a
n
g
e
(
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
i
n
p
u
t
C
l
a
s
s
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
"
e
.
g
.
 
F
r
o
n
t
e
n
d
 
D
e
v
e
l
o
p
e
r
,
 
R
e
a
c
t
 
E
n
g
i
n
e
e
r
"
 
/
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
1
.
5
"
>
s
e
p
a
r
a
t
e
 
w
i
t
h
 
c
o
m
m
a
s
<
/
p
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
l
a
b
e
l
C
l
a
s
s
}
>
<
C
h
e
c
k
C
i
r
c
l
e
 
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
 
P
r
e
f
e
r
r
e
d
 
s
k
i
l
l
s
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
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
 
v
a
l
u
e
=
{
j
o
b
P
r
e
f
S
k
i
l
l
s
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
(
e
)
 
=
>
 
o
n
S
k
i
l
l
s
C
h
a
n
g
e
(
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
i
n
p
u
t
C
l
a
s
s
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
"
e
.
g
.
 
R
e
a
c
t
,
 
T
y
p
e
S
c
r
i
p
t
,
 
N
o
d
e
.
j
s
"
 
/
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
1
.
5
"
>
s
e
p
a
r
a
t
e
 
w
i
t
h
 
c
o
m
m
a
s
<
/
p
>


 
 
 
 
 
 
<
/
d
i
v
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
l
a
b
e
l
C
l
a
s
s
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
"
 
/
>
 
P
r
e
f
e
r
r
e
d
 
l
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
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
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
 
v
a
l
u
e
=
{
j
o
b
P
r
e
f
L
o
c
a
t
i
o
n
s
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
(
e
)
 
=
>
 
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
s
C
h
a
n
g
e
(
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
i
n
p
u
t
C
l
a
s
s
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
"
e
.
g
.
 
B
a
n
g
a
l
o
r
e
,
 
R
e
m
o
t
e
"
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
l
a
b
e
l
C
l
a
s
s
}
>
M
i
n
 
s
a
l
a
r
y
 
(
L
P
A
)
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
j
o
b
P
r
e
f
S
a
l
a
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
(
e
)
 
=
>
 
o
n
S
a
l
a
r
y
C
h
a
n
g
e
(
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
i
n
p
u
t
C
l
a
s
s
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
"
e
.
g
.
 
6
"
 
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


 
 
 
 
 
 
<
T
o
g
g
l
e
P
i
l
l
s


 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
W
o
r
k
 
m
o
d
e
"


 
 
 
 
 
 
 
 
o
p
t
i
o
n
s
=
{
[
"
R
E
M
O
T
E
"
,
 
"
H
Y
B
R
I
D
"
,
 
"
O
N
S
I
T
E
"
]
}


 
 
 
 
 
 
 
 
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
j
o
b
P
r
e
f
W
o
r
k
M
o
d
e
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
o
n
W
o
r
k
M
o
d
e
C
h
a
n
g
e
}


 
 
 
 
 
 
 
 
f
o
r
m
a
t
=
{
(
m
)
 
=
>
 
m
.
c
h
a
r
A
t
(
0
)
 
+
 
m
.
s
l
i
c
e
(
1
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
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
T
o
g
g
l
e
P
i
l
l
s


 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
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
 
l
e
v
e
l
"


 
 
 
 
 
 
 
 
o
p
t
i
o
n
s
=
{
[
"
I
N
T
E
R
N
"
,
 
"
E
N
T
R
Y
"
,
 
"
M
I
D
"
,
 
"
S
E
N
I
O
R
"
]
}


 
 
 
 
 
 
 
 
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
j
o
b
P
r
e
f
E
x
p
L
e
v
e
l
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
o
n
E
x
p
L
e
v
e
l
C
h
a
n
g
e
}


 
 
 
 
 
 
 
 
f
o
r
m
a
t
=
{
(
l
)
 
=
>
 
l
.
c
h
a
r
A
t
(
0
)
 
+
 
l
.
s
l
i
c
e
(
1
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
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
T
o
g
g
l
e
P
i
l
l
s


 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
D
o
m
a
i
n
"


 
 
 
 
 
 
 
 
o
p
t
i
o
n
s
=
{
[
"
f
r
o
n
t
e
n
d
"
,
 
"
b
a
c
k
e
n
d
"
,
 
"
f
u
l
l
s
t
a
c
k
"
,
 
"
d
e
v
o
p
s
"
,
 
"
d
a
t
a
"
,
 
"
m
l
"
,
 
"
m
o
b
i
l
e
"
]
}


 
 
 
 
 
 
 
 
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
j
o
b
P
r
e
f
D
o
m
a
i
n
s
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
o
n
D
o
m
a
i
n
s
C
h
a
n
g
e
}


 
 
 
 
 
 
 
 
f
o
r
m
a
t
=
{
(
d
)
 
=
>
 
d
.
c
h
a
r
A
t
(
0
)
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
+
 
d
.
s
l
i
c
e
(
1
)
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
s
a
v
i
n
g
J
o
b
P
r
e
f
s
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
h
a
n
d
l
e
S
a
v
e
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
w
-
f
u
l
l
 
i
n
l
i
n
e
-
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
 
j
u
s
t
i
f
y
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
5
 
p
y
-
3
 
b
g
-
s
t
o
n
e
-
9
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
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
5
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
s
t
o
n
e
-
9
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
m
d
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
8
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
s
t
o
n
e
-
2
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
 
b
o
r
d
e
r
-
0
 
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
s
a
v
i
n
g
J
o
b
P
r
e
f
s
 
?
 
<
>
<
L
o
a
d
e
r
2
 
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
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
S
a
v
i
n
g
.
.
.
<
/
>
 
:
 
"
S
a
v
e
 
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
"
}


 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


