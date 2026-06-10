
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
,
 
u
s
e
S
t
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
"
;


i
m
p
o
r
t
 
{
 
C
h
e
v
r
o
n
U
p
 
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
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
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
 
B
a
c
k
T
o
T
o
p
B
u
t
t
o
n
(
)
 
{


 
 
c
o
n
s
t
 
[
i
s
V
i
s
i
b
l
e
,
 
s
e
t
I
s
V
i
s
i
b
l
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
f
a
l
s
e
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
 
t
o
g
g
l
e
V
i
s
i
b
i
l
i
t
y
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
I
s
V
i
s
i
b
l
e
(
w
i
n
d
o
w
.
s
c
r
o
l
l
Y
 
>
 
3
0
0
)
;


 
 
 
 
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
s
c
r
o
l
l
"
,
 
t
o
g
g
l
e
V
i
s
i
b
i
l
i
t
y
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
 
{


 
 
 
 
 
 
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
s
c
r
o
l
l
"
,
 
t
o
g
g
l
e
V
i
s
i
b
i
l
i
t
y
)
;


 
 
 
 
}
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
s
c
r
o
l
l
T
o
T
o
p
 
=
 
(
)
 
=
>
 
{


 
 
 
 
w
i
n
d
o
w
.
s
c
r
o
l
l
T
o
(
{


 
 
 
 
 
 
t
o
p
:
 
0
,


 
 
 
 
 
 
b
e
h
a
v
i
o
r
:
 
"
s
m
o
o
t
h
"
,


 
 
 
 
}
)
;


 
 
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
{
i
s
V
i
s
i
b
l
e
 
&
&
 
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


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
4
0
,
 
s
c
a
l
e
:
 
0
.
8
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
,
 
s
c
a
l
e
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
4
0
,
 
s
c
a
l
e
:
 
0
.
8
 
}
}


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
2
5
 
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
s
c
r
o
l
l
T
o
T
o
p
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
B
a
c
k
 
t
o
 
t
o
p
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


 
 
 
 
 
 
 
 
 
 
 
 
f
i
x
e
d
 
b
o
t
t
o
m
-
8
 
r
i
g
h
t
-
6
 
z
-
5
0


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
h
-
1
2
 
w
-
1
2


 
 
 
 
 
 
 
 
 
 
 
 
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
b
l
a
c
k
/
8
0
 
b
a
c
k
d
r
o
p
-
b
l
u
r
-
m
d


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
s
h
a
d
o
w
-
x
l


 
 
 
 
 
 
 
 
 
 
 
 
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
3
0
0


 
 
 
 
 
 
 
 
 
 
 
 
h
o
v
e
r
:
s
c
a
l
e
-
1
1
0
 
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
1


 
 
 
 
 
 
 
 
 
 
 
 
h
o
v
e
r
:
b
g
-
p
r
i
m
a
r
y


 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
:
s
c
a
l
e
-
9
5


 
 
 
 
 
 
 
 
 
 
 
 
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
b
l
a
c
k


 
 
 
 
 
 
 
 
 
 
 
 
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
w
h
i
t
e


 
 
 
 
 
 
 
 
 
 
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
U
p
 
s
i
z
e
=
{
2
2
}
 
/
>


 
 
 
 
 
 
 
 
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
}


 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
)
;


}


