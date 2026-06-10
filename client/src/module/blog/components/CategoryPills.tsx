
i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
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
 
}
 
f
r
o
m
 
"
@
/
l
i
b
/
t
y
p
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
 
{
 
K
i
c
k
e
r
 
}
 
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
K
i
c
k
e
r
"
;




c
o
n
s
t
 
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
S
:
 
R
e
c
o
r
d
<
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
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
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
:
 
"
C
a
r
e
e
r
 
A
d
v
i
c
e
"
,


 
 
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
:
 
"
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
i
p
s
"
,


 
 
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
:
 
"
S
a
l
a
r
y
 
G
u
i
d
e
"
,


 
 
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
:
 
"
I
n
d
u
s
t
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
"
,


 
 
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
:
 
"
R
e
s
u
m
e
 
T
i
p
s
"
,


 
 
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
:
 
"
T
e
c
h
 
T
r
e
n
d
s
"
,


}
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
 
C
a
t
e
g
o
r
y
P
i
l
l
s
P
r
o
p
s
 
{


 
 
s
e
l
e
c
t
e
d
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
 
|
 
"
A
L
L
"
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
 
|
 
"
A
L
L
"
)
 
=
>
 
v
o
i
d
;


}




c
o
n
s
t
 
c
a
t
e
g
o
r
i
e
s
:
 
(
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
 
|
 
"
A
L
L
"
)
[
]
 
=
 
[


 
 
"
A
L
L
"
,


 
 
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
,


 
 
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
,


 
 
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
,


 
 
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
,


 
 
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
,


 
 
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
,


]
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
C
a
t
e
g
o
r
y
P
i
l
l
s
(
{


 
 
s
e
l
e
c
t
e
d
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


}
:
 
C
a
t
e
g
o
r
y
P
i
l
l
s
P
r
o
p
s
)
 
{


 
 
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
m
t
-
6
 
m
b
-
8
"
>


 
 
 
 
 
 
{
/
*
 
K
i
c
k
e
r
 
—
 
l
i
m
e
 
d
o
t
 
+
 
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
*
/
}


 
 
 
 
 
 
<
K
i
c
k
e
r
 
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
b
-
4
"
>
c
a
t
e
g
o
r
i
e
s
<
/
K
i
c
k
e
r
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
 
g
a
p
-
3
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
s
c
r
o
l
l
b
a
r
-
h
i
d
e
 
p
b
-
2
"
>


 
 
 
 
 
 
 
 
{
c
a
t
e
g
o
r
i
e
s
.
m
a
p
(
(
c
a
t
e
g
o
r
y
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
s
e
l
e
c
t
e
d
 
=
=
=
 
c
a
t
e
g
o
r
y
;




 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
a
t
e
g
o
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
6
 
}
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
 
o
n
C
h
a
n
g
e
(
c
a
t
e
g
o
r
y
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
r
e
l
a
t
i
v
e
 
w
h
i
t
e
s
p
a
c
e
-
n
o
w
r
a
p
 
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
 
p
x
-
4
 
p
y
-
2
 
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
m
e
d
i
u
m
 
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
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
w
h
i
t
e
 
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
5
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
9
5
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
w
h
i
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
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
w
h
i
t
e
/
1
0
 
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
s
t
o
n
e
-
9
0
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
6
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
s
t
o
n
e
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
o
r
d
e
r
-
l
i
m
e
-
4
0
0
/
5
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
s
t
o
n
e
-
9
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
t
e
g
o
r
y
 
=
=
=
 
"
A
L
L
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
A
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
S
[
c
a
t
e
g
o
r
y
]
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
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


 
 
)
;


}
